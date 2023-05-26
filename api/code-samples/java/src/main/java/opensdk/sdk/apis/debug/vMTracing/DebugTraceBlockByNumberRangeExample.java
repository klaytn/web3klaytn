package org.web3j.protocol.klaytn.core.klaytnDebug.vMTracing;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugTraceBlockByNumberRangeResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class DebugTraceBlockByNumberRangeExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugTraceBlockByNumberRangeExample() throws IOException {
        int startBlockNum = 21;
        int endBlockNum = 30;

        DebugTraceBlockByNumberRangeResponse response = sdk.debug.traceBlockByNumberRange(startBlockNum, endBlockNum, null).send();
        response.getResult();
    }
}
