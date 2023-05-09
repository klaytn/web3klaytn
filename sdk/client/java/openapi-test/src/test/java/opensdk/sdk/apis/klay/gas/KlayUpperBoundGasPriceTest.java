package opensdk.sdk.apis.klay.gas;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayUpperBoundGasPriceResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;


public class KlayUpperBoundGasPriceTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    @Test
    @DisplayName("RPC klay_upperBoundGasPrice")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayUpperBoundGasPriceResponse response = sdk.klay.upperBoundGasPrice().send();

        assertNotNull(response);
        assertNull(response.getError());
    }
}
