package org.web3j.protocol.klaytn.core.klaytnDebug.profiling;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugBlockProfileResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class DebugBlockProfileExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugBlockProfileExample() throws IOException {
        String file = "block.profile";
        int seconds = 4;

        DebugBlockProfileResponse response = sdk.debug.blockProfile(file, seconds).send();
        response.getResult();
    }
}
