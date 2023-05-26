package org.web3j.protocol.klaytn.core.klaytnDebug.logging;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugSetVMLogTargetResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class DebugSetVMLogTargetExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugSetVMLogTargetExample() throws IOException {
        int target = 3;

        DebugSetVMLogTargetResponse response = sdk.debug.setVMLogTarget(target).send();
        response.getResult();
    }
}
