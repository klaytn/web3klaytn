#!/usr/bin/env bash

CURRENT_FILE_DIR=$(cd "$( dirname "${BASH_SOURCE[0]}")" && cd ../../ && pwd)
PROJECT_DIR=$(cd "$CURRENT_FILE_DIR" && cd ../../../ && pwd )

cd "${CURRENT_FILE_DIR}"
rm -rf "${CURRENT_FILE_DIR}/openapi/klay"
mkdir "${CURRENT_FILE_DIR}/openapi/klay"
cp .openapi-generator-ignore "${CURRENT_FILE_DIR}/openapi/klay"

"${PROJECT_DIR}"/bin/caver-openapi-generator-cli generate -c "${CURRENT_FILE_DIR}/scripts/klay/klay-config.yaml"

cd "${CURRENT_FILE_DIR}/openapi"
