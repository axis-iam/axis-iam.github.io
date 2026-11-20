#!/usr/bin/env bash
set -euo pipefail

consumer_root="$(mktemp -d "${TMPDIR:-/tmp}/axis-vertex-source-consumers.XXXXXX")"
fixture_root="$PWD/tests/public-install"
quickstart_root="$PWD/tests/quickstarts"
source_root="$consumer_root/sources"
node scripts/prepare-sdk-sources.mjs "$source_root"
export GRADLE_USER_HOME="${VERTEX_GRADLE_CACHE:-$consumer_root/gradle-cache}"
export UV_CACHE_DIR="${VERTEX_UV_CACHE:-$consumer_root/uv-cache}"
export GOCACHE="$consumer_root/go-cache"
export GOMODCACHE="${VERTEX_GO_MODULE_CACHE:-$consumer_root/go-modules}"

js_root="$source_root/sdk/sdk-js"
pnpm --dir "$js_root" install --frozen-lockfile
pnpm --dir "$js_root" --filter @axis-iam/vertex-react... --filter @axis-iam/vertex-express... build
mkdir -p "$js_root/artifacts" "$consumer_root/javascript"
pnpm --dir "$js_root/packages/core" pack --out ../../artifacts/vertex-core.tgz
pnpm --dir "$js_root/packages/react" pack --out ../../artifacts/vertex-react.tgz
pnpm --dir "$js_root/packages/express" pack --out ../../artifacts/vertex-express.tgz
cp "$fixture_root/javascript/package.json" "$fixture_root/javascript/consumer.ts" "$fixture_root/javascript/tsconfig.json" "$consumer_root/javascript/"
cp "$quickstart_root/javascript/quickstart.tsx" "$consumer_root/javascript/"
cp "$quickstart_root/javascript/bff.ts" "$quickstart_root/javascript/bff-react.tsx" "$consumer_root/javascript/"
(
  cd "$consumer_root/javascript"
  npm install --ignore-scripts "$js_root/artifacts/vertex-core.tgz" "$js_root/artifacts/vertex-react.tgz" "$js_root/artifacts/vertex-express.tgz"
  ./node_modules/.bin/tsc --noEmit
  node --input-type=module -e "await import('@axis-iam/vertex'); await import('@axis-iam/vertex-react'); await import('@axis-iam/vertex-express')"
)
printf '%s\n' 'JavaScript packed-source consumer and documentation quickstart passed.'

java_root="$source_root/sdk/sdk-java"
local_maven="$consumer_root/maven-repository"
bash "$java_root/gradlew" -p "$java_root" --no-daemon -Dmaven.repo.local="$local_maven" :vertex-sdk-core:publishToMavenLocal :vertex-sdk-web:publishToMavenLocal
mkdir -p "$consumer_root/java"
cp -R "$fixture_root/java/." "$consumer_root/java/"
cp "$quickstart_root/java/VertexSecurityConfiguration.java" "$consumer_root/java/src/main/java/"
cp "$quickstart_root/java/VertexBffConfiguration.java" "$consumer_root/java/src/main/java/"
bash "$java_root/gradlew" --project-dir "$consumer_root/java" --no-daemon -Dmaven.repo.local="$local_maven" compileJava
printf '%s\n' 'Java source-built Maven consumer and documentation quickstart passed.'

"${VERTEX_PYTHON:-python3}" -m venv "$consumer_root/python-venv"
"$consumer_root/python-venv/bin/python" -m pip install "$source_root/sdk/sdk-python[fastapi]"
"$consumer_root/python-venv/bin/python" "$fixture_root/python/verify.py"
IAM_ENDPOINT=https://auth.example.com IAM_CLIENT_ID=quickstart-client IAM_CLIENT_SECRET=quickstart-placeholder IAM_RESOURCE_AUDIENCE=api://orders \
  "$consumer_root/python-venv/bin/python" "$quickstart_root/python/quickstart.py"
"$consumer_root/python-venv/bin/python" -c "import runpy; module = runpy.run_path('$quickstart_root/python/bff.py'); assert module['create_app']('https://auth.example.com', 'api://orders', 'quickstart-client', 'quickstart-placeholder')"
printf '%s\n' 'Python source consumer and documentation quickstart passed.'

mkdir -p "$consumer_root/go"
cp "$fixture_root/go/go.mod" "$fixture_root/go/consumer_test.go" "$consumer_root/go/"
cp "$quickstart_root/go/quickstart_test.go" "$consumer_root/go/"
cp "$quickstart_root/go/bff_test.go" "$consumer_root/go/"
go_version="$(node -p "'v0.1.2-0.20261120053216-' + require('./static/source-revisions.json').sources.vertexSdkGo.slice(0, 12)")"
(
  cd "$consumer_root/go"
  modules=(github.com/axis-iam/vertex-sdk-go github.com/axis-iam/vertex-sdk-go/chi github.com/axis-iam/vertex-sdk-go/gin github.com/axis-iam/vertex-sdk-go/echo)
  versions=()
  for module in "${modules[@]}"; do versions+=("$module@$go_version"); done
  env -u GOPRIVATE -u GONOSUMDB GOTOOLCHAIN=go1.23.0 GOPROXY=https://proxy.golang.org GOSUMDB=sum.golang.org go get "${versions[@]}"
  env -u GOPRIVATE -u GONOSUMDB GOTOOLCHAIN=go1.23.0 GOPROXY=https://proxy.golang.org GOSUMDB=sum.golang.org go test ./...
  for module in "${modules[@]}"; do
    test "$(env -u GOPRIVATE -u GONOSUMDB GOTOOLCHAIN=go1.23.0 go list -m -f '{{.Version}}' "$module")" = "$go_version"
  done
  test "$(GOTOOLCHAIN=go1.23.0 go mod edit -json | node -e 'let value="";process.stdin.on("data",c=>value+=c);process.stdin.on("end",()=>console.log((JSON.parse(value).Replace??[]).length))')" = 0
)
printf '%s\n' 'Go public pseudo-version modules and documentation quickstart passed.'
printf '%s\n' "All four SDK source consumers passed. Isolated evidence: $consumer_root"
