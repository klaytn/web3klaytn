package org.web3j.protocol.klaytn.core.klaytnDebug.profiling;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugWriteMutexProfileResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class DebugWriteMutexProfileExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugWriteMutexProfileExample() throws IOException {
        String file = "mutex.profile";

        DebugWriteMutexProfileResponse response = sdk.debug.writeMutexProfile(file).send();
        response.getResult();
    }
}
