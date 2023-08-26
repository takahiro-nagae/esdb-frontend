#!/usr/bin/env bash

set -euo pipefail

# 変更したJSファイルに対して ESLint を実行する。
# 変更しなかった場合は何もしない。

# "catch exit status 1" grep wrapper
# https://stackoverflow.com/a/49627999
c1grep() {
  grep "$@" || test $? = 1;
}

echo "Linting js..."
yarn lint