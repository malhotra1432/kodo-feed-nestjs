#!/usr/bin/env bash

set -eu -o pipefail

process_command_chain() {
  if [ $# -gt 0 ] ; then
    $0 "$@"
  fi
}

task_install() {
  yarn install

  process_command_chain "$@"
}

task_format() {
  yarn format

  process_command_chain "$@"
}

task_build(){
  yarn build

process_command_chain "$@"
}

task_test() {
  jest

  process_command_chain "$@"
}

task_e2e_test() {
  jest --config ./test/jest-e2e.json

  process_command_chain "$@"
}

task_coverage() {
  yarn test:cov

  process_command_chain "$@"
}

task_run(){
  yarn start
}

task_run_dev(){
  yarn start:dev
}

task_usage(){
    cat <<EOF
Usage $0 COMMAND
commands are:
    install   - install the dependencies
    format   - Formats the code
    build    - Build the project
    run      - run the project
    go       - List out commands
    test     - Run Unit test
    e2e     - Run e2e test
    cov     - Run test coverage
    runDev  - Run in dev mode
EOF
exit 1
}

CMD=${1:-}
shift || true

case "${CMD}" in
    install) task_install "$@" ;;
    format) task_format "$@" ;;
    build) task_build "$@" ;;
    go)  build "$@" ;;
    test) task_test "$@" ;;
    teste2e) task_e2e_test "$@" ;;
    testCov) task_coverage "$@" ;;
    run) task_run "$@" ;;
    runDev) task_run_dev "$@" ;;
    *) task_usage ;;
esac