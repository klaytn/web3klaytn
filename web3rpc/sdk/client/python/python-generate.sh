#!/usr/bin/env bash
set -e

CURRENT_FILE_DIR=$(cd "$( dirname "$0" )" && pwd)
PROJECT_DIR=$(cd "$CURRENT_FILE_DIR" && cd ../../.. && pwd )

cd "${CURRENT_FILE_DIR}"
rm -rf "${CURRENT_FILE_DIR}/openapi"


mkdir "${CURRENT_FILE_DIR}/openapi"


# web3py covers all the eth namespace so disabled
# sh ./scripts/eth/python-eth-generate.sh ${CURRENT_FILE_DIR}
sh ./scripts/klay/python-klay-generate.sh ${CURRENT_FILE_DIR}
sh ./scripts/net/python-net-generate.sh ${CURRENT_FILE_DIR}
sh ./scripts/txpool/python-txpool-generate.sh ${CURRENT_FILE_DIR}
sh ./scripts/personal/python-personal-generate.sh ${CURRENT_FILE_DIR}
sh ./scripts/debug/python-debug-generate.sh ${CURRENT_FILE_DIR}
sh ./scripts/governance/python-governance-generate.sh ${CURRENT_FILE_DIR}
sh ./scripts/admin/python-admin-generate.sh ${CURRENT_FILE_DIR}
sh ./scripts/mainbridge/python-mainbridge-generate.sh ${CURRENT_FILE_DIR}
sh ./scripts/subbridge/python-subbridge-generate.sh ${CURRENT_FILE_DIR}

#cp .openapi-generator-ignore "${CURRENT_FILE_DIR}/openapi"

cd "${CURRENT_FILE_DIR}/web3py-ext-test-wrapper"

pip uninstall web3py_ext -y
pip install .
