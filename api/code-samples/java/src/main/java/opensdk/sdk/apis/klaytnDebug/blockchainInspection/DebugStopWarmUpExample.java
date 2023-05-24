package org.web3j.protocol.klaytn.core.klaytnDebug.blockchainInspection;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugStopWarmUpResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class DebugStopWarmUpExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        DebugStopWarmUpResponse response = sdk.debug.stopWarmUp().send();
        response.getResult();
    }
}
