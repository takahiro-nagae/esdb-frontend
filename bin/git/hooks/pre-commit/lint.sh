#!/usr/bin/env bash

set -euo pipefail

# 変更したファイルに対して ESLint を実行する。
# 変更しなかった場合は何もしない。

# "catch exit status 1" grep wrapper
# https://stackoverflow.com/a/49627999
c1grep() {
  grep "$@" || test $? = 1;
}

listFiles() {
  git diff --cached --name-only --diff-filter=ACMR | c1grep "$1"
}

IFS=$'\n' read -r -d '' -a FILES_ARRAY < <( listFiles "\.\(tsx\?\|jsx\)$" && printf '\0' )
if [[ "${#FILES_ARRAY[@]}" -eq 0 ]]; then
  echo "SKIP"
  exit 0
fi

echo "Linting js..."
yarn eslint "${FILES_ARRAY[@]}"