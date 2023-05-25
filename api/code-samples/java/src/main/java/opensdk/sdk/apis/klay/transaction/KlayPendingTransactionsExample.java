package org.web3j.protocol.klaytn.core.klay.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayPendingTransactionsResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class KlayPendingTransactionsExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    void klayPendingTransactionsExample() throws IOException {
        KlayPendingTransactionsResponse response = sdk.klay.pendingTransactions().send();
        response.getResult();
    }
}
