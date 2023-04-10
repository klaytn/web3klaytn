package opensdk.sdk.apis.klay.gas;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayUpperBoundGasPriceResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayUpperBoundGasPriceExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    void klayUpperBoundGasPriceExample() throws IOException {
        KlayUpperBoundGasPriceResponse response = sdk.klay.upperBoundGasPrice().send();
        response.getResult();
    }
}
