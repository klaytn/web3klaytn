#!/usr/bin/env bash

CURRENT_FILE_DIR=$1
PROJECT_DIR=$(cd "$CURRENT_FILE_DIR" && cd ../../../ && pwd )

cd "${CURRENT_FILE_DIR}"
rm -rf "${CURRENT_FILE_DIR}/openapi/net"
mkdir "${CURRENT_FILE_DIR}/openapi/net"
cp .openapi-generator-ignore "${CURRENT_FILE_DIR}/openapi/net"

"${PROJECT_DIR}"/bin/web3rpc-openapi-generator-cli generate -c "${CURRENT_FILE_DIR}/scripts/net/net-config.yaml"

cd "${CURRENT_FILE_DIR}/openapi/net"

pip uninstall opensdk-python-net -y
pip install .
