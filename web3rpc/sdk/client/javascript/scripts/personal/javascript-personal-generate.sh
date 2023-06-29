#!/usr/bin/env bash -e

CURRENT_FILE_DIR=$1
PROJECT_DIR=$(cd "$CURRENT_FILE_DIR" && cd ../../.. && pwd )

cd "${CURRENT_FILE_DIR}"



mkdir "${CURRENT_FILE_DIR}/openapi/personal"

cp .openapi-generator-ignore "${CURRENT_FILE_DIR}/openapi/personal"

sh "${PROJECT_DIR}"/bin/web3rpc-openapi-generator-cli generate -c "${CURRENT_FILE_DIR}/scripts/personal/personal-config.yaml"

cd "${CURRENT_FILE_DIR}/openapi/personal"
yarn install
yarn link
echo "${CURRENT_FILE_DIR}/openapi/personal"

cd "${CURRENT_FILE_DIR}/opensdk"
yarn link opensdk-javascript-personal



# cd "${CURRENT_FILE_DIR}"/openapi-test
# yarn link opensdk-javascript-test
