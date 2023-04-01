package opensdk.sdk.apis.klay.configuration;

import opensdk.sdk.models.KlayGasPriceResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayGasPriceExample {

    private final OpenSDK sdk = new OpenSDK();

    void klayGasPriceExample() throws IOException {
        KlayGasPriceResponse gr = sdk.klay.gasPrice().send();
        gr.getResult();
    }
}
