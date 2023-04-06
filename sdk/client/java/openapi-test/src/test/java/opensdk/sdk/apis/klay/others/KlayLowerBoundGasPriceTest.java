package opensdk.sdk.apis.klay.others;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayLowerBoundGasPriceResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@DisplayName("Klay RPC Test")
public class KlayLowerBoundGasPriceTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    @Test
    @DisplayName("RPC klay_lowerBoundGasPrice")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayLowerBoundGasPriceResponse response = sdk.klay.lowerBoundGasPrice().send();
        assertNotNull(response.getResult());
    }
}
