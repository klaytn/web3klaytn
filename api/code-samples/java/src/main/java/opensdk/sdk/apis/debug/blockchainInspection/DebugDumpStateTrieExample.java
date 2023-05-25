package org.web3j.protocol.klaytn.core.klaytnDebug.blockchainInspection;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugDumpStateTrieResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class DebugDumpStateTrieExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugDumpStateTrieExample() throws IOException {
        DebugDumpStateTrieResponse response = sdk.debug.dumpStateTrie("0x80").send();
        response.getResult();
    }
}
