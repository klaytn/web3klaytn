package org.web3j.protocol.klaytn.core.eth.configuration;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.EthEtherbaseResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class EthEtherbaseExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);
    void ethEtherbaseExample() throws IOException {
        EthEtherbaseResponse response = sdk.eth.etherbase().send();
        response.getResult();
    }
}
