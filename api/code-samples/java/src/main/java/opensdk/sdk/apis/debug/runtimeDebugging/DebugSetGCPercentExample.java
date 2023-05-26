package org.web3j.protocol.klaytn.core.klaytnDebug.runtimeDebugging;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugSetGCPercentResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class DebugSetGCPercentExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugSetGCPercentExample() throws IOException {
        int percent = 100;

        DebugSetGCPercentResponse response = sdk.debug.setGCPercent(percent).send();
        response.getResult();
    }
}
