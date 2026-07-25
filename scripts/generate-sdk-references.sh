#!/usr/bin/env bash
set -euo pipefail

source_root="${VERTEX_SOURCE_ROOT:-../iam-java}"
node scripts/check-source-revisions.mjs vertexSdkJavaScript vertexSdkJava vertexSdkGo vertexSdkPython

js_root="$source_root/sdk/sdk-js"
rm -rf docs/sdk/javascript/reference/generated
for package in core react express nestjs codegen test; do
  entries=("$js_root/packages/$package/src/index.ts")
  if [[ -f "$js_root/packages/$package/src/server.ts" ]]; then
    entries+=("$js_root/packages/$package/src/server.ts")
  fi
  pnpm exec typedoc \
    --plugin typedoc-plugin-markdown \
    --tsconfig "$js_root/packages/$package/tsconfig.json" \
    --entryPoints "${entries[@]}" \
    --out "docs/sdk/javascript/reference/generated/$package" \
    --name "Axis Vertex JavaScript SDK: $package" \
    --readme none \
    --disableSources
done
node scripts/escape-typedoc-mdx.mjs

java_root="$source_root/sdk/sdk-java"
"$java_root/gradlew" -p "$java_root" --no-daemon :vertex-sdk-core:javadoc
rm -rf static/generated/sdk/java
mkdir -p static/generated/sdk/java
cp -R "$java_root/vertex-sdk-core/build/docs/javadoc/." static/generated/sdk/java/

go_root="$source_root/sdk/sdk-go"
go_tmp="$(mktemp)"
{
  printf '%s\n\n' '---' 'title: Go API reference' 'slug: /sdk/go/reference/' 'pagination_next: null' 'pagination_prev: null' '---' '' '# Go API reference'
  while IFS='|' read -r package package_dir; do
    printf '\n## %s\n\n```text\n' "$package"
    (cd "$package_dir" && GOTOOLCHAIN=go1.23.0 GOPROXY=off go doc -all . 2>/dev/null)
    printf '\n```\n'
  done < <(cd "$go_root" && GOTOOLCHAIN=go1.23.0 GOPROXY=off go list -f '{{.ImportPath}}|{{.Dir}}' ./...)
} > "$go_tmp"
cp "$go_tmp" docs/sdk/go/reference/index.mdx
rm -f "$go_tmp"

python_root="$source_root/sdk/sdk-python"
python_tmp="$(mktemp)"
PYTHONDONTWRITEBYTECODE=1 uv run --isolated --no-project --with-editable "$python_root" python -m pydoc axis_vertex > "$python_tmp"
{
  printf '%s\n\n' '---' 'title: Python API reference' 'slug: /sdk/python/reference/' 'pagination_next: null' 'pagination_prev: null' '---' '' '# Python API reference' '' '```text'
  sed '/^FILE$/,$d' "$python_tmp"
  printf '%s\n' '```'
} > docs/sdk/python/reference/index.mdx
rm -f "$python_tmp"

node scripts/check-sdk-public-exports.mjs
printf '%s\n' 'Generated and validated all SDK references.'
