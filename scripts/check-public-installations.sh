#!/usr/bin/env bash
set -euo pipefail

consumer_root="$(mktemp -d "${TMPDIR:-/tmp}/axis-vertex-public-install.XXXXXX")"
cleanup() {
  find "$consumer_root" -depth -delete
}
trap cleanup EXIT

fixture_root="$PWD/tests/public-install"

mkdir -p "$consumer_root/javascript"
cp "$fixture_root/javascript/package.json" "$fixture_root/javascript/consumer.ts" "$fixture_root/javascript/tsconfig.json" "$consumer_root/javascript/"
(
  cd "$consumer_root/javascript"
  npm install --ignore-scripts https://vertex-packages.chaosguide.com/releases/0.1.0/js/axis-iam-vertex-0.1.0.tgz https://vertex-packages.chaosguide.com/releases/0.1.0/js/axis-iam-vertex-react-0.1.0.tgz
  ./node_modules/.bin/tsc --noEmit
  node --input-type=module -e "await import('@axis-iam/vertex'); await import('@axis-iam/vertex-react')"
)
printf '%s\n' 'JavaScript public tarball consumer passed.'

mkdir -p "$consumer_root/java"
cp -R "$fixture_root/java/." "$consumer_root/java/"
curl --fail --silent --show-error --location --output "$consumer_root/gradle.zip" https://services.gradle.org/distributions/gradle-9.4.0-bin.zip
unzip -q "$consumer_root/gradle.zip" -d "$consumer_root"
"$consumer_root/gradle-9.4.0/bin/gradle" \
  --project-dir "$consumer_root/java" \
  --gradle-user-home "$consumer_root/gradle-user-home" \
  --no-daemon \
  --no-build-cache \
  compileJava
printf '%s\n' 'Java public Maven repository consumer passed.'

python3 -m venv "$consumer_root/python-venv"
"$consumer_root/python-venv/bin/python" -m pip install \
  https://vertex-packages.chaosguide.com/releases/0.1.0/python/axis_iam_vertex-0.1.0-py3-none-any.whl
"$consumer_root/python-venv/bin/python" "$fixture_root/python/verify.py"
printf '%s\n' 'Python public wheel consumer passed.'

mkdir -p "$consumer_root/go"
cp "$fixture_root/go/go.mod" "$fixture_root/go/consumer_test.go" "$consumer_root/go/"
(
  cd "$consumer_root/go"
  env -u GOPRIVATE -u GONOSUMDB \
    GOTOOLCHAIN=go1.23.0 \
    GOPROXY=https://proxy.golang.org \
    GOSUMDB=sum.golang.org \
    go get github.com/axis-iam/vertex-sdk-go@v0.1.1 github.com/axis-iam/vertex-sdk-go/chi@v0.1.1
  go mod edit -json | node -e 'let value = ""; process.stdin.on("data", (chunk) => value += chunk); process.stdin.on("end", () => { const key = ["Rep", "lace"].join(""); if (JSON.parse(value)[key]?.length) process.exit(1); });'
  env -u GOPRIVATE -u GONOSUMDB \
    GOTOOLCHAIN=go1.23.0 \
    GOPROXY=https://proxy.golang.org \
    GOSUMDB=sum.golang.org \
    go test ./...
  test "$(env -u GOPRIVATE -u GONOSUMDB GOTOOLCHAIN=go1.23.0 go list -m -f '{{.Version}}' github.com/axis-iam/vertex-sdk-go)" = "v0.1.1"
  test "$(env -u GOPRIVATE -u GONOSUMDB GOTOOLCHAIN=go1.23.0 go list -m -f '{{.Version}}' github.com/axis-iam/vertex-sdk-go/chi)" = "v0.1.1"
)
printf '%s\n' 'Go public root and Chi module consumer passed.'

printf '%s\n' 'All four public-only SDK installation consumers passed.'
