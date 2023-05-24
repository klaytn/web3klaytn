package org.web3j.protocol.klaytn.core.klaytnDebug.runtimeDebugging;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugFreeOSMemoryResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class DebugFreeOSMemoryExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugFreeOSMemoryExample() throws IOException {
        DebugFreeOSMemoryResponse response = sdk.debug.freeOSMemory().send();
        response.getResult();
    }
}
