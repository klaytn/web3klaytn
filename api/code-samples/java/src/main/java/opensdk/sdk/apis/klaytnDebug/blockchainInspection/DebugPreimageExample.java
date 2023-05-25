package org.web3j.protocol.klaytn.core.klaytnDebug.blockchainInspection;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugPreimageResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class DebugPreimageExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugPreImageExample() throws IOException {
        String sha3Hash = "0xaf953a2d01f55cfe080c0c94150a60105e8ac3d51153058a1f03dd239dd08586";

        DebugPreimageResponse response = sdk.debug.preimage(sha3Hash).send();
        response.getResult();
    }
}
