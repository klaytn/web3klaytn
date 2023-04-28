package opensdk.sdk.apis.txpool;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.TxpoolStatusResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class TxpoolStatusExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void txpoolStatusExample() throws IOException {
        TxpoolStatusResponse response = sdk.txpool.status().send();
        response.getResult();
    }
}
