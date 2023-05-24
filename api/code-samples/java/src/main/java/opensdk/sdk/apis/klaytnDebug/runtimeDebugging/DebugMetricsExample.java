package org.web3j.protocol.klaytn.core.klaytnDebug.runtimeDebugging;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugMetricsResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class DebugMetricsExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugMetricsExample() throws IOException {
        boolean raw = true;

        DebugMetricsResponse response = sdk.debug.metrics(raw).send();
        response.getResult();
    }
}
