#!/usr/bin/env bash
set -euo pipefail

source_root="${VERTEX_SOURCE_ROOT:-../iam-java}"
node scripts/check-source-revisions.mjs
pnpm exec tsx scripts/check-quickstart-parity.ts

js_root="$source_root/sdk/sdk-js"
pnpm --dir "$js_root" --filter @axis-iam/vertex-react... build
mkdir -p tmp/quickstarts
ln -sfn "$(realpath "$js_root")" tmp/quickstarts/sdk-js
pnpm exec tsc -p tests/quickstarts/javascript/tsconfig.json --noEmit

java_root="$source_root/sdk/sdk-java"
"$java_root/gradlew" -p "$java_root" --no-daemon :vertex-sdk-core:jar
java_jar="$(find "$java_root/vertex-sdk-core/build/libs" -name '*.jar' ! -name '*sources*' ! -name '*javadoc*' | head -1)"
java_classpath="$($java_root/gradlew -p "$java_root" --no-daemon -q -I "$PWD/tests/quickstarts/java/print-classpath.init.gradle" :vertex-sdk-core:printQuickstartClasspath | tail -1)"
mkdir -p tmp/quickstarts/java
javac -cp "$java_jar:$java_classpath" -d tmp/quickstarts/java tests/quickstarts/java/VertexSecurityConfiguration.java

go_root="$source_root/sdk/sdk-go"
go_fixture="$PWD/tests/quickstarts/go"
go_consumer="$PWD/tmp/quickstarts/go-consumer"
mkdir -p "$go_consumer"
cp "$go_fixture/go.mod" "$go_fixture/go.sum" "$go_fixture/quickstart_test.go" "$go_consumer/"
(cd "$go_consumer" && go mod edit -replace github.com/axis-iam/vertex-sdk-go="$(realpath "$go_root")" && GOTOOLCHAIN=go1.23.0 GOPROXY=off go test ./...)

python_root="$source_root/sdk/sdk-python"
export PYTHONDONTWRITEBYTECODE=1
export IAM_ENDPOINT=https://auth.example.com
export IAM_CLIENT_ID=quickstart-client
export IAM_CLIENT_SECRET=quickstart-placeholder
export IAM_RESOURCE_AUDIENCE=api://orders
uv run --isolated --no-project --with-editable "$python_root[fastapi]" python -c 'from pathlib import Path; path = Path("tests/quickstarts/python/quickstart.py"); compile(path.read_text(), str(path), "exec")'
uv run --isolated --no-project --with-editable "$python_root[fastapi]" python tests/quickstarts/python/quickstart.py

printf '%s\n' 'All four SDK quickstart consumers passed.'
