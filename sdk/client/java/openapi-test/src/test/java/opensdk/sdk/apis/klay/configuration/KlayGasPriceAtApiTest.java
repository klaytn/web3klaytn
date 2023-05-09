package opensdk.sdk.apis.klay.configuration;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGasPriceAtResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

@DisplayName("Klay RPC Test")
public class KlayGasPriceAtApiTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    @Test
    @DisplayName("RPC klay_gasPriceAt")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayGasPriceAtResponse response = sdk.klay.gasPriceAt(
            "0x64")
        .send();

        assertNotNull(response);
        assertNull(response.getError());
    }
}
