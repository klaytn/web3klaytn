package org.web3j.protocol.klaytn.core.klaytnDebug.runtimeTracing;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugStartGoTraceResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class DebugStartGoTraceExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugStartGoTraceExample() throws IOException {
        String file = "go.trace";

        DebugStartGoTraceResponse response = sdk.debug.startGoTrace(file).send();
        response.getResult();
    }
}
