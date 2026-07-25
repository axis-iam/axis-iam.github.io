#!/usr/bin/env bash
set -euo pipefail

: "${VERTEX_SOURCE_ROOT:=../iam-java}"
export VERTEX_SOURCE_ROOT

if [[ "${1:-}" == "--sdk-only" ]]; then
  node scripts/check-source-revisions.mjs vertexSdkJavaScript vertexSdkJava vertexSdkGo vertexSdkPython
  pnpm references:generate
  pnpm exec tsx scripts/generate-generated-content-manifest.ts
  pnpm validate:generated
  pnpm validate:public
  printf '%s\n' 'Private SDK source refresh completed; committed public SDK artifacts are current.'
  exit 0
fi

node scripts/check-source-revisions.mjs
pnpm manifests:generate
pnpm exec tsx scripts/check-api-contract.ts --write-evidence
pnpm references:generate
pnpm quickstarts:check
pnpm exec tsx scripts/generate-generated-content-manifest.ts
pnpm validate:generated
pnpm validate:public

printf '%s\n' 'Private source refresh completed; committed public artifacts are current.'
