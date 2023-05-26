package org.web3j.protocol.klaytn.core.klaytnDebug.runtimeTracing;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugGoTraceResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class DebugGoTraceExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugGoTraceExample() throws IOException {
        String file = "go.trace";
        int seconds = 5;

        DebugGoTraceResponse response = sdk.debug.goTrace(file, seconds).send();
        response.getResult();
    }
}
