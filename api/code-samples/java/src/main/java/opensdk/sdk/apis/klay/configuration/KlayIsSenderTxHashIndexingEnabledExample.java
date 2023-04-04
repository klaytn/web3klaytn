package opensdk.sdk.apis.klay.configuration;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayIsSenderTxHashIndexingEnabledResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayIsSenderTxHashIndexingEnabledExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void klayIsSenderTxHashIndexingEnabledExample() throws IOException {
        KlayIsSenderTxHashIndexingEnabledResponse response = sdk.klay.isSenderTxHashIndexingEnabled().send();
        response.getResult();
    }
}
