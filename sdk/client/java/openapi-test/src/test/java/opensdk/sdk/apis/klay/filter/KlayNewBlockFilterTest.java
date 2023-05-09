package opensdk.sdk.apis.klay.filter;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayNewBlockFilterResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

@DisplayName("Klay RPC Test")
public class KlayNewBlockFilterTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    @Test
    @DisplayName("RPC klay_newBlockFilter")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayNewBlockFilterResponse response = sdk.klay.newBlockFilter().send();

        assertNotNull(response);
        assertNull(response.getError());
    }
}
