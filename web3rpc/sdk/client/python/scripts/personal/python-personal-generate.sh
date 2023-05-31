#!/usr/bin/env bash

CURRENT_FILE_DIR=$1
PROJECT_DIR=$(cd "$CURRENT_FILE_DIR" && cd ../../../ && pwd )

cd "${CURRENT_FILE_DIR}"
rm -rf "${CURRENT_FILE_DIR}/openapi/personal"
mkdir "${CURRENT_FILE_DIR}/openapi/personal"
cp .openapi-generator-ignore "${CURRENT_FILE_DIR}/openapi/personal"

sh "${PROJECT_DIR}"/bin/web3rpc-openapi-generator-cli generate -c "${CURRENT_FILE_DIR}/scripts/personal/personal-config.yaml"

cd "${CURRENT_FILE_DIR}/openapi/personal"

pip uninstall opensdk-python-personal -y
pip install .
