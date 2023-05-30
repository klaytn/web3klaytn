#!/usr/bin/env bash

CURRENT_FILE_DIR=$1
PROJECT_DIR=$(cd "$CURRENT_FILE_DIR" && cd ../../../ && pwd )

cd "${CURRENT_FILE_DIR}"
rm -rf "${CURRENT_FILE_DIR}/openapi/txpool"
mkdir "${CURRENT_FILE_DIR}/openapi/txpool"
cp .openapi-generator-ignore "${CURRENT_FILE_DIR}/openapi/txpool"

sh "${PROJECT_DIR}"/bin/web3rpc-openapi-generator-cli generate -c "${CURRENT_FILE_DIR}/scripts/txpool/txpool-config.yaml"

cd "${CURRENT_FILE_DIR}/openapi/txpool"

pip uninstall opensdk-python-txpool -y
pip install .
