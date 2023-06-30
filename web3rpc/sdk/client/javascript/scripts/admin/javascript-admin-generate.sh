

CURRENT_FILE_DIR=$1
PROJECT_DIR=$(cd "$CURRENT_FILE_DIR" && cd ../../.. && pwd )

cd "${CURRENT_FILE_DIR}"



mkdir "${CURRENT_FILE_DIR}/openapi/admin"

cp .openapi-generator-ignore "${CURRENT_FILE_DIR}/openapi/admin"

sh "${PROJECT_DIR}"/bin/web3rpc-openapi-generator-cli generate -c "${CURRENT_FILE_DIR}/scripts/admin/admin-config.yaml"

cd "${CURRENT_FILE_DIR}/openapi/admin"
yarn install
yarn link
echo "${CURRENT_FILE_DIR}/openapi/admin"

cd "${CURRENT_FILE_DIR}/opensdk"
yarn link opensdk-javascript-admin



# cd "${CURRENT_FILE_DIR}"/openapi-test
# yarn link opensdk-javascript-test
