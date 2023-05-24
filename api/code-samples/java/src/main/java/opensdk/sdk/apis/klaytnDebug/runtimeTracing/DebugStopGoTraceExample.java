package org.web3j.protocol.klaytn.core.klaytnDebug.runtimeTracing;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugStopGoTraceResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class DebugStopGoTraceExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugStopGoTraceExample() throws IOException {
        DebugStopGoTraceResponse response = sdk.debug.stopGoTrace().send();
        response.getResult();
    }
}
