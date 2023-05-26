package org.web3j.protocol.klaytn.core.eth.configuration;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.EthChainIdResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class EthChainIdExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);

    void ethChainIdExample() throws IOException {
        EthChainIdResponse br = sdk.eth.chainId().send();
        br.getResult();
    }
}
