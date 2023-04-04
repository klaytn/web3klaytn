package opensdk.sdk.apis.klay.filter;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayNewPendingTransactionFilterResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayNewPendingTransactionFilterExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    void klayNewPendingTransactionFilterExample() throws IOException {
        KlayNewPendingTransactionFilterResponse response = sdk.klay.newPendingTransactionFilter().send();
        response.getResult();
    }
}
