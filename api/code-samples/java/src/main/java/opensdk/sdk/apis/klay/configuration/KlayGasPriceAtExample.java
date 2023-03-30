package opensdk.sdk.apis.klay.configuration;

import opensdk.sdk.models.GasPriceAt200Response;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayGasPriceAtExample {

    private final OpenSDK sdk = new OpenSDK();

    void klayGasPriceAtExample() throws IOException {
        String blockNumber = "0x64";

        GasPriceAt200Response response = sdk.klay.gasPriceAt(blockNumber).send();
    }
}
