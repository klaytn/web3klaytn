package org.web3j.protocol.klaytn.core.klaytnDebug.logging;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugVerbosityByIDResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class DebugVerbosityByIDExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugVerbosityByIDExample() throws IOException {
        int id = 1;
        int level = 3;

        DebugVerbosityByIDResponse response = sdk.debug.verbosityByID(id, level).send();
        response.getResult();
    }
}
