package opensdk.sdk.apis.klay.configuration;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGasPriceResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayGasPriceExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);

    void klayGasPriceExample() throws IOException {
        KlayGasPriceResponse gr = sdk.klay.gasPrice().send();
        gr.getResult();
    }
}
