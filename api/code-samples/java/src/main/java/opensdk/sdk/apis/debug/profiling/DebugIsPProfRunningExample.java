package org.web3j.protocol.klaytn.core.klaytnDebug.profiling;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugIsPProfRunningResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class DebugIsPProfRunningExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugIsPProfRunningExample() throws IOException {
        DebugIsPProfRunningResponse response = sdk.debug.isPProfRunning().send();
        response.getResult();
    }
}
