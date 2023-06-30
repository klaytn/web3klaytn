

CURRENT_FILE_DIR=$1
PROJECT_DIR=$(cd "$CURRENT_FILE_DIR" && cd ../../.. && pwd )

cd "${CURRENT_FILE_DIR}"



mkdir "${CURRENT_FILE_DIR}/openapi/debug"

cp .openapi-generator-ignore "${CURRENT_FILE_DIR}/openapi/debug"

sh "${PROJECT_DIR}"/bin/web3rpc-openapi-generator-cli generate -c "${CURRENT_FILE_DIR}/scripts/debug/debug-config.yaml"

cd "${CURRENT_FILE_DIR}/openapi/debug"
yarn install
yarn link 
echo "${CURRENT_FILE_DIR}/openapi/debug"

cd "${CURRENT_FILE_DIR}/opensdk"
yarn link opensdk-javascript-debug

