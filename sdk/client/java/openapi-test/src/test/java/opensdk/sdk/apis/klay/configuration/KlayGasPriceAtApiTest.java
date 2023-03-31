package opensdk.sdk.apis.klay.configuration;

import opensdk.sdk.apis.BaseOpenSDK;
import opensdk.sdk.models.GasPriceAt200Response;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.io.IOException;

@DisplayName("Klay RPC Test")
public class KlayGasPriceAtApiTest extends BaseOpenSDK {

    @Test
    @DisplayName("RPC klay_gasPriceAt")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        GasPriceAt200Response gr = sdk.klay.gasPriceAt(
            "0x64")
        .send();
        gr.getResult();
    }
}
