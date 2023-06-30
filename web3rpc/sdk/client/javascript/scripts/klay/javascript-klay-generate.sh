

CURRENT_FILE_DIR=$1
PROJECT_DIR=$(cd "$CURRENT_FILE_DIR" && cd ../../.. && pwd )

cd "${CURRENT_FILE_DIR}"



mkdir "${CURRENT_FILE_DIR}/openapi/klay"

cp .openapi-generator-ignore "${CURRENT_FILE_DIR}/openapi/klay"

sh "${PROJECT_DIR}"/bin/web3rpc-openapi-generator-cli generate -c "${CURRENT_FILE_DIR}/scripts/klay/klay-config.yaml"

cd "${CURRENT_FILE_DIR}/openapi/klay"
yarn install
yarn link 
echo "${CURRENT_FILE_DIR}/openapi/klay"

cd "${CURRENT_FILE_DIR}/opensdk"
yarn link opensdk-javascript-klay



# cd "${CURRENT_FILE_DIR}"/openapi-test
# yarn link opensdk-javascript-test
