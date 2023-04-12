package opensdk.sdk.apis.eth.filter;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthNewPendingTransactionFilterResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class EthNewPendingTransactionFilterExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);
    void ethNewPendingTransactionFilterExample() throws IOException {
        EthNewPendingTransactionFilterResponse response = sdk.eth.newPendingTransactionFilter().send();
        response.getResult();
    }
}
