#!/usr/bin/env bash

CURRENT_FILE_DIR=$1
PROJECT_DIR=$(cd "$CURRENT_FILE_DIR" && cd ../../../ && pwd )

cd "${CURRENT_FILE_DIR}"
rm -rf "${CURRENT_FILE_DIR}/openapi/klay"
mkdir "${CURRENT_FILE_DIR}/openapi/klay"
cp .openapi-generator-ignore "${CURRENT_FILE_DIR}/openapi/klay"

sh "${PROJECT_DIR}"/bin/web3rpc-openapi-generator-cli generate -c "${CURRENT_FILE_DIR}/scripts/klay/klay-config.yaml"

cd "${CURRENT_FILE_DIR}/openapi/klay"

pip uninstall web3rpc-python-klay -y
pip install .
