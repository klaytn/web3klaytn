package org.web3j.protocol.klaytn.core.klaytnDebug.others;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugChaindbCompactResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class DebugChaindbCompactExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void DebugChaindbCompactExample() throws IOException {
        DebugChaindbCompactResponse response = sdk.debug.chaindbCompact().send();
        response.getResult();
    }
}
