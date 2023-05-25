package org.web3j.protocol.klaytn.core.klaytnDebug.profiling;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugSetBlockProfileRateResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class DebugSetBlockProfileRateExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugSetBlockProfileRateExample() throws IOException {
        int rate = 3;

        DebugSetBlockProfileRateResponse response = sdk.debug.setBlockProfileRate(rate).send();
        response.getResult();
    }
}
