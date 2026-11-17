#!/usr/bin/env bash
set -euo pipefail

pnpm exec tsx scripts/check-quickstart-parity.ts
exec bash scripts/check-public-installations.sh
