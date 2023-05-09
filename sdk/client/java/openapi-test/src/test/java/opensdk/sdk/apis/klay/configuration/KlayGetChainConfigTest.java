package opensdk.sdk.apis.klay.configuration;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetChainConfigResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;


@DisplayName("Klay RPC Test")
public class KlayGetChainConfigTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    @Test
    @DisplayName("RPC klay_getChainConfig")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        Integer blogNumberOrTag = 100;

        KlayGetChainConfigResponse response = sdk.klay.getChainConfig(blogNumberOrTag).send();

        assertNotNull(response);
        assertNull(response.getError());
    }
}
