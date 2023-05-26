package org.web3j.protocol.klaytn.core.klaytnDebug.profiling;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugWriteBlockProfileResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class DebugWriteBlockProfileExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugWriteBlockProfileExample() throws IOException {
        String file = "block.profile";

        DebugWriteBlockProfileResponse response = sdk.debug.writeBlockProfile(file).send();
        response.getResult();
    }
}
