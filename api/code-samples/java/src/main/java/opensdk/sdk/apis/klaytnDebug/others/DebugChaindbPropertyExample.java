package org.web3j.protocol.klaytn.core.klaytnDebug.others;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugChaindbPropertyResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class DebugChaindbPropertyExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugChaindbPropertyExample() throws IOException {
        String property = "0xe17d821e9a8a8736b9aea8c2de1f3a4934ac0a2f";

        DebugChaindbPropertyResponse response = sdk.debug.chaindbProperty(property).send();
        response.getResult();
    }
}
