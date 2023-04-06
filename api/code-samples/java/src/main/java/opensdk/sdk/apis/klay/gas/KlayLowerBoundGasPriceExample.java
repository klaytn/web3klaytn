package opensdk.sdk.apis.klay.gas;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayLowerBoundGasPriceResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayLowerBoundGasPriceExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    void klayLowerBoundGasPriceExample() throws IOException {
        KlayLowerBoundGasPriceResponse response = sdk.klay.lowerBoundGasPrice().send();
        response.getResult();
    }
}
