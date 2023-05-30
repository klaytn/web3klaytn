#!/usr/bin/env bash

CURRENT_FILE_DIR=$1
PROJECT_DIR=$(cd "$CURRENT_FILE_DIR" && cd ../../.. && pwd )

cd "${CURRENT_FILE_DIR}"



mkdir "${CURRENT_FILE_DIR}/openapi/eth"

cp .openapi-generator-ignore "${CURRENT_FILE_DIR}/openapi/eth"

sh "${PROJECT_DIR}"/bin/web3rpc-openapi-generator-cli generate -c "${CURRENT_FILE_DIR}/scripts/eth/eth-config.yaml"

cd "${CURRENT_FILE_DIR}/openapi/eth"
yarn install
yarn link 
echo "${CURRENT_FILE_DIR}/openapi/eth"

cd "${CURRENT_FILE_DIR}"/opensdk
yarn link opensdk-javascript-eth



# cd "${CURRENT_FILE_DIR}"/openapi-test
# yarn link opensdk-javascript-test
