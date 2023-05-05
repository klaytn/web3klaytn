package opensdk.sdk.apis.txpool;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.TxpoolInspectResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class TxpoolInspectExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void txpoolInspectExample() throws IOException {
        TxpoolInspectResponse response = sdk.txpool.inspect().send();
        response.getResult();
    }
}
