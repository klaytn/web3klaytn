package org.web3j.protocol.klaytn.core.klaytnDebug.logging;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugVmoduleResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class DebugVModuleExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugVModuleExample() throws IOException {
        String module = "p2p=4";

        DebugVmoduleResponse response = sdk.debug.vmodule(module).send();
        response.getResult();
    }
}
