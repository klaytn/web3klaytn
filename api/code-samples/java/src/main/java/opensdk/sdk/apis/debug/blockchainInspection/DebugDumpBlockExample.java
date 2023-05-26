package org.web3j.protocol.klaytn.core.klaytnDebug.blockchainInspection;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugDumpBlockResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class DebugDumpBlockExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugDumpBlockExample() throws IOException {
        DebugDumpBlockResponse response = sdk.debug.dumpBlock("0x80").send();
        response.getResult();
    }
}
