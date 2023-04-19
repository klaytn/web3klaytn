#!/usr/bin/env bash

CURRENT_FILE_DIR=$(cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd)
PROJECT_DIR=$(cd "$CURRENT_FILE_DIR" && cd ../../.. && pwd )

cd "${CURRENT_FILE_DIR}"
rm -rf "${CURRENT_FILE_DIR}/openapi"


mkdir "${CURRENT_FILE_DIR}/openapi"


sh ./script/eth/eth-generate.sh ${CURRENT_FILE_DIR}
sh ./script/klay/klay-generate.sh ${CURRENT_FILE_DIR}
sh ./script/net/net-generate.sh ${CURRENT_FILE_DIR}
sh ./script/txpool/txpool-generate.sh ${CURRENT_FILE_DIR}
sh ./script/personal/personal-generate.sh ${CURRENT_FILE_DIR}
sh ./script/klaytnDebug/debug-generate.sh ${CURRENT_FILE_DIR}
sh ./script/governance/governance-generate.sh ${CURRENT_FILE_DIR}
sh ./script/admin/admin-generate.sh ${CURRENT_FILE_DIR}
sh ./script/mainbridge/mainbridge-generate.sh ${CURRENT_FILE_DIR}
sh ./script/subbridge/subbridge-generate.sh ${CURRENT_FILE_DIR}

#cd "${CURRENT_FILE_DIR}/openapi"
#
#sh gradlew clean build publishToMavenLocal