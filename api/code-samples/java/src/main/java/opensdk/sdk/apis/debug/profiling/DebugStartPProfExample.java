package org.web3j.protocol.klaytn.core.klaytnDebug.profiling;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugStartPProfResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class DebugStartPProfExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugStartPProfExample() throws IOException {
        String address = "localhost";
        int port = 6000;
        DebugStartPProfResponse response = sdk.debug.startPProf(address, port).send();
        response.getResult();
    }
}
