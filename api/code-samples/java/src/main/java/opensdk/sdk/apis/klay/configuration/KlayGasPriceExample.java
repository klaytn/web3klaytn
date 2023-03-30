package opensdk.sdk.apis.klay.configuration;

import opensdk.sdk.models.GasPrice200Response;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayGasPriceExample {

    private final OpenSDK sdk = new OpenSDK();

    void klayGasPriceExample() throws IOException {
        GasPrice200Response response = sdk.klay.gasPrice().send();
    }
}
