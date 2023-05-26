package org.web3j.protocol.klaytn.core.klaytnDebug.logging;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugVerbosityByNameResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class DebugVerbosityByNameExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugVerbosityByNameExample() throws IOException {
        String name = "API";
        int level = 3;

        DebugVerbosityByNameResponse response = sdk.debug.verbosityByName(name, level).send();
        response.getResult();
    }
}
