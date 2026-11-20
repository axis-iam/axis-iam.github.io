#!/usr/bin/env bash
set -euo pipefail

work_root="$(mktemp -d "${TMPDIR:-/tmp}/axis-vertex-references.XXXXXX")"
source_root="$work_root/sources"
node scripts/prepare-sdk-sources.mjs "$source_root"
export GRADLE_USER_HOME="${VERTEX_GRADLE_CACHE:-$work_root/gradle-cache}"
export UV_CACHE_DIR="${VERTEX_UV_CACHE:-$work_root/uv-cache}"
export GOCACHE="$work_root/go-cache"
export GOMODCACHE="${VERTEX_GO_MODULE_CACHE:-$work_root/go-modules}"
languages=" ${*:-javascript java go python} "

if [[ "$languages" == *" javascript "* ]]; then
js_root="$source_root/sdk/sdk-js"
pnpm --dir "$js_root" install --frozen-lockfile
pnpm --dir "$js_root" --filter @axis-iam/vertex... --filter @axis-iam/vertex-react... --filter @axis-iam/vertex-express... build
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
fi

if [[ "$languages" == *" java "* ]]; then
java_root="$source_root/sdk/sdk-java"
bash "$java_root/gradlew" -p "$java_root" --no-daemon :vertex-sdk-core:javadoc :vertex-sdk-web:javadoc
rm -rf static/generated/sdk/java
mkdir -p static/generated/sdk/java
cp -R "$java_root/vertex-sdk-core/build/docs/javadoc/." static/generated/sdk/java/
mkdir -p static/generated/sdk/java/web
cp -R "$java_root/vertex-sdk-web/build/docs/javadoc/." static/generated/sdk/java/web/
fi

if [[ "$languages" == *" go "* ]]; then
go_root="$source_root/sdk/sdk-go"
go_tmp="$(mktemp)"
{
  printf '%s\n\n' '---' 'title: Go API reference' 'slug: /sdk/go/reference/' 'pagination_next: null' 'pagination_prev: null' '---' '' '# Go API reference'
  while IFS='|' read -r package package_dir; do
    printf '\n## %s\n\n```text\n' "$package"
    (cd "$package_dir" && GOTOOLCHAIN=go1.23.0 go doc -all .)
    printf '\n```\n'
  done < <(for module in . chi gin echo; do (cd "$go_root/$module" && GOTOOLCHAIN=go1.23.0 go list -f '{{.ImportPath}}|{{.Dir}}' ./...); done)
} > "$go_tmp"
cp "$go_tmp" docs/sdk/go/reference/index.mdx
rm -f "$go_tmp"
fi

if [[ "$languages" == *" python "* ]]; then
python_root="$source_root/sdk/sdk-python"
python_tmp="$(mktemp)"
{
  printf '%s\n\n' '---' 'title: Python API reference' 'slug: /sdk/python/reference/' 'pagination_next: null' 'pagination_prev: null' '---' '' '# Python API reference'
  for package in axis_vertex axis_vertex.web_session axis_vertex.fastapi axis_vertex.django; do
    PYTHONDONTWRITEBYTECODE=1 uv run --python 3.12 --isolated --no-project --with "$python_root[fastapi,django]" python -m pydoc "$package" > "$python_tmp"
    printf '\n## %s\n\n```text\n' "$package"
    sed '/^FILE$/,$d' "$python_tmp"
    printf '%s\n' '```'
  done
} > docs/sdk/python/reference/index.mdx
rm -f "$python_tmp"
fi

VERTEX_SOURCE_ROOT="$source_root" node scripts/check-sdk-public-exports.mjs
printf '%s\n' "Generated SDK references using isolated snapshots in $work_root."
printf '%s\n' 'Generated and validated all SDK references.'
