#!/bin/bash
set -euxo pipefail

BASEDIR=$(cd "$(dirname "$0")"/../..; pwd)

for timing_dir in "$BASEDIR"/bin/git/hooks/*; do
  ln -sf "$BASEDIR/bin/git/_hook.sh" "$BASEDIR/.git/hooks/${timing_dir##*/}"
done

git config --local core.hooksPath .git/hooks