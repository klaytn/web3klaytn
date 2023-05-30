#!/usr/bin/env bash

CURRENT_FILE_DIR=$1
PROJECT_DIR=$(cd "$CURRENT_FILE_DIR" && cd ../../../ && pwd )

# generate openapi yaml
#cd "${PROJECT_DIR}"/api/redocly
#yarn build

# generate openapi codes
cd "${CURRENT_FILE_DIR}"
rm -rf "${CURRENT_FILE_DIR}/openapi/mainbridge"
mkdir "${CURRENT_FILE_DIR}/openapi/mainbridge"
cp .openapi-generator-ignore "${CURRENT_FILE_DIR}/openapi/mainbridge"
"${PROJECT_DIR}"/bin/caver-openapi-generator-cli generate -c "${CURRENT_FILE_DIR}/script/mainbridge/mainbridge-config.yaml"

# generate openapi jar library
cd "${CURRENT_FILE_DIR}/openapi/mainbridge"
sh gradlew clean build publishToMavenLocal
