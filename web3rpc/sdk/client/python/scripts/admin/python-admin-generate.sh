#!/usr/bin/env bash -e

CURRENT_FILE_DIR=$1
PROJECT_DIR=$(cd "$CURRENT_FILE_DIR" && cd ../../../ && pwd )
WEB3PY_DIR=$(cd "$CURRENT_FILE_DIR" && cd ../../../../web3py-ext/web3py_ext/web3rpc/ && pwd )

cd "${CURRENT_FILE_DIR}"
rm -rf "${CURRENT_FILE_DIR}/openapi/admin"
mkdir "${CURRENT_FILE_DIR}/openapi/admin"
cp .openapi-generator-ignore "${CURRENT_FILE_DIR}/openapi/admin"

sh "${PROJECT_DIR}"/bin/web3rpc-openapi-generator-cli generate -c "${CURRENT_FILE_DIR}/scripts/admin/admin-config.yaml"

cd "${CURRENT_FILE_DIR}/openapi/admin"
cp ./web3rpc_python_admin/api/admin_api.py "${WEB3PY_DIR}"

pip uninstall web3rpc-python-admin -y
pip install .