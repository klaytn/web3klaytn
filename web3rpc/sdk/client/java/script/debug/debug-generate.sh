#!/usr/bin/env bash -e

CURRENT_FILE_DIR=$1
PROJECT_DIR=$(cd "$CURRENT_FILE_DIR" && cd ../../../ && pwd )

# generate openapi yaml
#cd "${PROJECT_DIR}"/api/redocly
#yarn build

# generate openapi codes
cd "${CURRENT_FILE_DIR}"
rm -rf "${CURRENT_FILE_DIR}/openapi/debug"
mkdir "${CURRENT_FILE_DIR}/openapi/debug"
cp .openapi-generator-ignore "${CURRENT_FILE_DIR}/openapi/debug"
sh "${PROJECT_DIR}"/bin/web3rpc-openapi-generator-cli generate -c "${CURRENT_FILE_DIR}/script/debug/debug-config.yaml"

# generate openapi jar library
cd "${CURRENT_FILE_DIR}/openapi/debug"
sh gradlew clean build publishToMavenLocal
