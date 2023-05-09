package opensdk.sdk.apis.klay.gas;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayFeeHistoryResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

@DisplayName("Klay RPC Test")
public class KlayFeeHistoryApiTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC klay_feeHistory")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayFeeHistoryResponse response = sdk.klay.feeHistory(
            "0x10",
            "latest",
            List.of(0.1, 0.2, 0.3))
        .send();

        assertNotNull(response);
        assertNull(response.getError());
    }
}
