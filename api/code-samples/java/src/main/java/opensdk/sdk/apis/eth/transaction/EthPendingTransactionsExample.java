package org.web3j.protocol.klaytn.core.eth.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.EthPendingTransactionsResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class EthPendingTransactionsExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);
    void ethPendingTransactionsExample() throws IOException {
        EthPendingTransactionsResponse response = sdk.eth.pendingTransactions().send();
        response.getResult();
    }
}
