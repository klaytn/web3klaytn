package org.web3j.protocol.klaytn.core.klaytnDebug.others;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugSetMutexProfileFractionResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class DebugSetMutexProfileFractionExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugSetMutexProfileFractionExample() throws IOException {
        int rate = 2;

        DebugSetMutexProfileFractionResponse response = sdk.debug.setMutexProfileFraction(rate).send();
        response.getResult();
    }
}
