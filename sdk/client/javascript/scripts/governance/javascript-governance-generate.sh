#!/usr/bin/env bash

CURRENT_FILE_DIR=$1
PROJECT_DIR=$(cd "$CURRENT_FILE_DIR" && cd ../../.. && pwd )

cd "${CURRENT_FILE_DIR}"



mkdir "${CURRENT_FILE_DIR}/openapi/governance"

cp .openapi-generator-ignore "${CURRENT_FILE_DIR}/openapi/governance"

"${PROJECT_DIR}"/bin/caver-openapi-generator-cli generate -c "${CURRENT_FILE_DIR}/scripts/governance/governance-config.yaml"

cd "${CURRENT_FILE_DIR}/openapi/governance"
yarn install
yarn link
echo "${CURRENT_FILE_DIR}/openapi/governance"

cd "${CURRENT_FILE_DIR}"/opensdk
yarn link opensdk-javascript-governance



# cd "${CURRENT_FILE_DIR}"/openapi-test
# yarn link opensdk-javascript-test
