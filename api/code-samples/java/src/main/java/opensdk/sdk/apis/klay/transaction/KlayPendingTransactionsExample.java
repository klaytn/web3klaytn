package opensdk.sdk.apis.klay.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayPendingTransactionsResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayPendingTransactionsExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    void klayPendingTransactionsExample() throws IOException {
        KlayPendingTransactionsResponse response = sdk.klay.pendingTransactions().send();
        response.getResult();
    }
}
