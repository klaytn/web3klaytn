package org.web3j.protocol.klaytn.core.eth.configuration;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.EthGasPriceResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class EthGasPriceExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);

    void ethGasPriceExample() throws IOException {
        EthGasPriceResponse br = sdk.eth.gasPrice().send();
        br.getResult();
    }
}
