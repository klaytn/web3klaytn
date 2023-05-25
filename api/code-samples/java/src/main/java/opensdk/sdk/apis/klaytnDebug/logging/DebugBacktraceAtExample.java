package org.web3j.protocol.klaytn.core.klaytnDebug.logging;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugBacktraceAtResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class DebugBacktraceAtExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugBacktraceAtExample() throws IOException {
        String location = "server.go:443";

        DebugBacktraceAtResponse response = sdk.debug.backtraceAt(location).send();
        response.getResult();
    }
}
