#!/usr/bin/env bash
set -e

CURRENT_FILE_DIR=$1
PROJECT_DIR=$(cd "$CURRENT_FILE_DIR" && cd ../../.. && pwd )

cd "${CURRENT_FILE_DIR}"



mkdir "${CURRENT_FILE_DIR}/openapi/mainbridge"

cp .openapi-generator-ignore "${CURRENT_FILE_DIR}/openapi/mainbridge"

sh "${PROJECT_DIR}"/bin/web3rpc-openapi-generator-cli generate -c "${CURRENT_FILE_DIR}/scripts/mainbridge/mainbridge-config.yaml"

cd "${CURRENT_FILE_DIR}/openapi/mainbridge"
yarn install
yarn link
echo "${CURRENT_FILE_DIR}/openapi/mainbridge"

cd "${CURRENT_FILE_DIR}/opensdk"
yarn link opensdk-javascript-mainbridge



# cd "${CURRENT_FILE_DIR}"/openapi-test
# yarn link opensdk-javascript-test
