#!/usr/bin/env sh
set -eu
ROOT="$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)"
cd "$ROOT"
mkdir -p dist
ares-package --check app service
ares-package --no-minify --outdir dist app service
find dist -maxdepth 1 -type f -name '*.ipk' -print
