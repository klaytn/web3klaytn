package org.web3j.protocol.klaytn.core.klaytnDebug.logging;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugVerbosityResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class DebugVerbosityExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugVerbosityExample() throws IOException {
        int level = 3;

        DebugVerbosityResponse response = sdk.debug.verbosity(level).send();
        response.getResult();
    }
}
