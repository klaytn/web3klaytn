package org.web3j.protocol.klaytn.core.klaytnDebug.vMTracing;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugTraceBlockByNumberResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class DebugTraceBlockByNumberExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugTraceBlockByNumberExample() throws IOException {
        int blockNum = 21;

        DebugTraceBlockByNumberResponse response = sdk.debug.traceBlockByNumber(blockNum, null).send();
        response.getResult();
    }
}
