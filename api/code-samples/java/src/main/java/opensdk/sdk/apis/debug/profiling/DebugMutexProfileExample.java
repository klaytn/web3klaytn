package org.web3j.protocol.klaytn.core.klaytnDebug.profiling;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugMutexProfileResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class DebugMutexProfileExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugMutexProfileExample() throws IOException {
        String file = "mutex.profile";
        int seconds = 5;

        DebugMutexProfileResponse response = sdk.debug.mutexProfile(file, seconds).send();
        response.getResult();
    }
}
