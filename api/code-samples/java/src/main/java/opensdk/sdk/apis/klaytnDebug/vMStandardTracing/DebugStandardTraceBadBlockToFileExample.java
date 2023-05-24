package org.web3j.protocol.klaytn.core.klaytnDebug.vMStandardTracing;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugStandardTraceBadBlockToFileResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class DebugStandardTraceBadBlockToFileExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugStandardTraceBlockToFileExample() throws IOException {
        String blockHash = "0x1d5ba00e313a81ae6d409d459c153327072665d9ea2f47608369722baf0cfbb6";

        DebugStandardTraceBadBlockToFileResponse response = sdk.debug.standardTraceBadBlockToFile(blockHash, null).send();
        response.getResult();
    }
}
