#!/usr/bin/env bash

CURRENT_FILE_DIR=$(cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd)
PROJECT_DIR=$(cd "$CURRENT_FILE_DIR" && cd ../../.. && pwd )

cd "${CURRENT_FILE_DIR}"



mkdir "${CURRENT_FILE_DIR}/openapi/klay"

cp .openapi-generator-ignore "${CURRENT_FILE_DIR}/openapi/klay"

"${PROJECT_DIR}"/bin/caver-openapi-generator-cli generate -c "${CURRENT_FILE_DIR}/scripts/klay/klay-config.yaml"

cd "${CURRENT_FILE_DIR}/openapi/klay"
yarn install
yarn link 
echo "${CURRENT_FILE_DIR}/openapi/klay"

cd "${CURRENT_FILE_DIR}"/opensdk
yarn link opensdk-javascript-klay



# cd "${CURRENT_FILE_DIR}"/openapi-test
# yarn link opensdk-javascript-test
