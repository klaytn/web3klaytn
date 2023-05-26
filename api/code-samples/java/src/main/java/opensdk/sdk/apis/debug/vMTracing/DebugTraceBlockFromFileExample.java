package org.web3j.protocol.klaytn.core.klaytnDebug.vMTracing;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugTraceBlockFromFileResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class DebugTraceBlockFromFileExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String fileName = "/home/sotatek/block.rlp";

        DebugTraceBlockFromFileResponse response = sdk.debug.traceBlockFromFile(fileName, null).send();
        response.getResult();
    }
}
