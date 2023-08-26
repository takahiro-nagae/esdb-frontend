#!/bin/bash
set -euo pipefail

BASEDIR=$(cd "$(dirname "$0")"/../..; pwd)

timing=${0##*/}
timing_dir=$BASEDIR/bin/git/hooks/$timing

if [[ ! -d "$timing_dir" ]]; then
  exit 0
fi

echo "Running $timing hooks..."

hook_paths=("$timing_dir"/*)
max_length=$(printf '%s\n' "${hook_paths[@]}" | xargs -I{} basename {} .sh |
  awk '{if (max < length) max = length} END {print max}')

pids=()
for hook_path in "${hook_paths[@]}"; do
  hook_name=$(basename "$hook_path" .sh)
  prefix=$(printf '[\033[1;34m%-*s\033[0m] ' "$max_length" "$hook_name")
  "$hook_path" "$@" > >(sed "s/^/$prefix/") 2> >(sed "s/^/$prefix/" >&2) &
  pids+=($!)
done

status=0
for pid in "${pids[@]}"; do
  if ! wait "$pid"; then
    status=1
  fi
done

exit "$status"
