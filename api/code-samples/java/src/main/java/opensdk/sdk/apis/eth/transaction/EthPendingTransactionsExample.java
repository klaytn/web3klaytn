package opensdk.sdk.apis.eth.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthPendingTransactionsResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class EthPendingTransactionsExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);
    void ethPendingTransactionsExample() throws IOException {
        EthPendingTransactionsResponse response = sdk.eth.pendingTransactions().send();
        response.getResult();
    }
}
