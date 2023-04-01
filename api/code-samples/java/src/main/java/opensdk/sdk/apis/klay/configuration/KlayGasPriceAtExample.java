package opensdk.sdk.apis.klay.configuration;

import opensdk.sdk.models.KlayGasPriceAtResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayGasPriceAtExample {

    private final OpenSDK sdk = new OpenSDK();

    void klayGasPriceAtExample() throws IOException {
        KlayGasPriceAtResponse gr = sdk.klay.gasPriceAt(
            "0x64")
        .send();
        gr.getResult();
    }
}
