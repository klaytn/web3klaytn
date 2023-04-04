package opensdk.sdk.apis.klay.configuration;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGasPriceAtResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayGasPriceAtExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void klayGasPriceAtExample() throws IOException {
        KlayGasPriceAtResponse gr = sdk.klay.gasPriceAt(
            "0x64")
        .send();
        gr.getResult();
    }
}
