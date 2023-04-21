package opensdk.sdk.apis.txpool;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.TxpoolContentResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class TxpoolContentExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void txpoolContentExample() throws IOException {
        TxpoolContentResponse response = sdk.txpool.content().send();
        response.getResult();
    }
}
