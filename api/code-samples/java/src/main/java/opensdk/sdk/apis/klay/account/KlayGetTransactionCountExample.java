package org.web3j.protocol.klaytn.core.klay.account;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayGetTransactionCountResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class KlayGetTransactionCountExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void klayGetTransactionCountExample() throws IOException {
        KlayGetTransactionCountResponse response = sdk.klay.getTransactionCount(
                "0xc94770007dda54cF92009BFF0dE90c06F603a09f","latest"
        ).send();
        response.getResult();
    }

}
