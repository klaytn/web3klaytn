#!/usr/bin/env bash

CURRENT_FILE_DIR=$(cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd)
PROJECT_DIR=$(cd "$CURRENT_FILE_DIR" && cd ../../.. && pwd )

cd "${CURRENT_FILE_DIR}"
rm -rf "${CURRENT_FILE_DIR}/openapi"


mkdir "${CURRENT_FILE_DIR}/openapi"


sh ./scripts/eth/python-eth-generate.sh ${CURRENT_FILE_DIR}
sh ./scripts/klay/python-klay-generate.sh ${CURRENT_FILE_DIR}
sh ./scripts/net/python-net-generate.sh ${CURRENT_FILE_DIR}
sh ./scripts/txpool/python-txpool-generate.sh ${CURRENT_FILE_DIR}
sh ./scripts/personal/python-personal-generate.sh ${CURRENT_FILE_DIR}
sh ./scripts/klaytnDebug/python-debug-generate.sh ${CURRENT_FILE_DIR}

#cp .openapi-generator-ignore "${CURRENT_FILE_DIR}/openapi"

cd "${CURRENT_FILE_DIR}/opensdk"

pip uninstall opensdk -y
pip install .
