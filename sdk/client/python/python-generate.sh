#!/usr/bin/env bash

CURRENT_FILE_DIR=$(cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd)
PROJECT_DIR=$(cd "$CURRENT_FILE_DIR" && cd ../../.. && pwd )

cd "${CURRENT_FILE_DIR}"
rm -rf "${CURRENT_FILE_DIR}/openapi"


mkdir "${CURRENT_FILE_DIR}/openapi"


sh ./scripts/eth/python-eth-generate.sh
sh ./scripts/klay/python-klay-generate.sh


#cp .openapi-generator-ignore "${CURRENT_FILE_DIR}/openapi"

cd "${CURRENT_FILE_DIR}/opensdk"

pip uninstall opensdk -y
pip install .
