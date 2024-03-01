#!/usr/bin/env bash
set -e

CURRENT_FILE_DIR=$1
PROJECT_DIR=$(cd "$CURRENT_FILE_DIR" && cd ../../../ && pwd )
WEB3PY_DIR=$(cd "$CURRENT_FILE_DIR" && cd ../../../../web3py-ext/web3py_ext/web3rpc/ && pwd )

cd "${CURRENT_FILE_DIR}"
rm -rf "${CURRENT_FILE_DIR}/openapi/subbridge"
mkdir "${CURRENT_FILE_DIR}/openapi/subbridge"
cp .openapi-generator-ignore "${CURRENT_FILE_DIR}/openapi/subbridge"

sh "${PROJECT_DIR}"/bin/web3rpc-openapi-generator-cli generate -c "${CURRENT_FILE_DIR}/scripts/subbridge/subbridge-config.yaml"

cd "${CURRENT_FILE_DIR}/openapi/subbridge"
cp ./web3rpc_python_subbridge/api/subbridge_api.py "${WEB3PY_DIR}"

pip uninstall web3rpc-python-subbridge -y
pip install .