package org.web3j.protocol.klaytn.core.eth.account;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.EthAccountsResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class EthAccountsExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);

    void ethAccountsExample() throws IOException {
        EthAccountsResponse ar = sdk.eth.accounts().send();
        ar.getResult();
    }
}
