#!/usr/bin/env bash

CURRENT_FILE_DIR=$(cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd)
PROJECT_DIR=$(cd "$CURRENT_FILE_DIR" && cd ../../.. && pwd )

cd "${CURRENT_FILE_DIR}"



mkdir "${CURRENT_FILE_DIR}/openapi/txpool"

cp .openapi-generator-ignore "${CURRENT_FILE_DIR}/openapi/txpool"

"${PROJECT_DIR}"/bin/caver-openapi-generator-cli generate -c "${CURRENT_FILE_DIR}/scripts/txpool/txpool-config.yaml"

cd "${CURRENT_FILE_DIR}/openapi/txpool"
yarn install
yarn link 
echo "${CURRENT_FILE_DIR}/openapi/txpool"

cd "${CURRENT_FILE_DIR}"/opensdk
yarn link opensdk-javascript-txpool

