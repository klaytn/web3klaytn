

CURRENT_FILE_DIR=$1
PROJECT_DIR=$(cd "$CURRENT_FILE_DIR" && cd ../../.. && pwd )

cd "${CURRENT_FILE_DIR}"



mkdir "${CURRENT_FILE_DIR}/openapi/subbridge"

cp .openapi-generator-ignore "${CURRENT_FILE_DIR}/openapi/subbridge"

sh "${PROJECT_DIR}"/bin/web3rpc-openapi-generator-cli generate -c "${CURRENT_FILE_DIR}/scripts/subbridge/subbridge-config.yaml"

cd "${CURRENT_FILE_DIR}/openapi/subbridge"
yarn install
yarn link
echo "${CURRENT_FILE_DIR}/openapi/subbridge"

cd "${CURRENT_FILE_DIR}/opensdk"
yarn link opensdk-javascript-subbridge



# cd "${CURRENT_FILE_DIR}"/openapi-test
# yarn link opensdk-javascript-test
