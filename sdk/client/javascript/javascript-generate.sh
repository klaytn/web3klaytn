#!/usr/bin/env bash

CURRENT_FILE_DIR=$(cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd)
PROJECT_DIR=$(cd "$CURRENT_FILE_DIR" && cd ../../.. && pwd )

cd "${CURRENT_FILE_DIR}"
rm -rf "${CURRENT_FILE_DIR}/openapi"


mkdir "${CURRENT_FILE_DIR}/openapi"


sh ./scripts/eth/javascript-eth-generate.sh
sh ./scripts/klay/javascript-klay-generate.sh


cd "${CURRENT_FILE_DIR}/opensdk"
yarn link


cd cd "${CURRENT_FILE_DIR}/openapi-test"
yarn link opensdk-javascript-test



# "${PROJECT_DIR}"/bin/caver-openapi-generator-cli generate -c "${CURRENT_FILE_DIR}/javascript-config.yaml"

# cd "${CURRENT_FILE_DIR}/openapi"
# yarn install
# yarn link

# cd "${CURRENT_FILE_DIR}"/openapi-test
# yarn link opensdk-javascript-eth
