package org.web3j.protocol.klaytn.core.klay.account;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayAccountsResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class KlayAccountsExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void klayAccountsExample() throws IOException {
        KlayAccountsResponse ar = sdk.klay.accounts().send();
        ar.getResult();
    }
}
