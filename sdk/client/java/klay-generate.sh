#!/usr/bin/env bash

CURRENT_FILE_DIR=$(cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd)
PROJECT_DIR=$(cd "$CURRENT_FILE_DIR" && cd ../../.. && pwd )

# generate openapi yaml
#cd "${PROJECT_DIR}"/api/redocly
#yarn build

# generate openapi codes
cd "${CURRENT_FILE_DIR}"
rm -rf "${CURRENT_FILE_DIR}/openapi/klay"
mkdir "${CURRENT_FILE_DIR}/openapi/klay"
cp .openapi-generator-ignore "${CURRENT_FILE_DIR}/openapi/klay"
"${PROJECT_DIR}"/bin/caver-openapi-generator-cli generate -c "${CURRENT_FILE_DIR}/klay-config.yaml"

# generate openapi jar library
cd "${CURRENT_FILE_DIR}/openapi/klay"
sh gradlew check build
