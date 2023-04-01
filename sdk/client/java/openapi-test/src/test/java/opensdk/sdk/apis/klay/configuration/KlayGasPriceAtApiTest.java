package opensdk.sdk.apis.klay.configuration;

import opensdk.sdk.apis.BaseOpenSDK;
import opensdk.sdk.models.KlayGasPriceAtResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.io.IOException;

@DisplayName("Klay RPC Test")
public class KlayGasPriceAtApiTest extends BaseOpenSDK {

    @Test
    @DisplayName("RPC klay_gasPriceAt")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayGasPriceAtResponse gr = sdk.klay.gasPriceAt(
            "0x64")
        .send();
        gr.getResult();
    }
}
