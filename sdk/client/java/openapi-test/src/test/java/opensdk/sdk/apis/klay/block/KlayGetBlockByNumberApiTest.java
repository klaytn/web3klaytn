package opensdk.sdk.apis.klay.block;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetBlockByNumberResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

@DisplayName("Klay RPC Test")
public class KlayGetBlockByNumberApiTest {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    @Test
    @DisplayName("RPC klay_getBlockByNumber")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayGetBlockByNumberResponse response = sdk.klay.getBlockByNumber(
            "0x1b4",
            true)
        .send();

        assertNotNull(response);
        assertNull(response.getError());
    }
}
