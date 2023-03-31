package opensdk.sdk.apis.klay.configuration;

import opensdk.sdk.apis.BaseOpenSDK;
import opensdk.sdk.models.GasPrice200Response;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.io.IOException;

@DisplayName("Klay RPC Test")
public class KlayGasPriceApiTest extends BaseOpenSDK {

    @Test
    @DisplayName("RPC klay_gasPrice")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        GasPrice200Response gr = sdk.klay.gasPrice().send();
        gr.getResult();
    }
}
