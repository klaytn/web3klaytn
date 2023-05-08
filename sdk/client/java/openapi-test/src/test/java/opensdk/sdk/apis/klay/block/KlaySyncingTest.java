package opensdk.sdk.apis.klay.block;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlaySyncingResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;


public class KlaySyncingTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    @Test
    @DisplayName("RPC klay_syncing")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlaySyncingResponse response = sdk.klay.syncing().send();
        assertNotNull(response.getResult());
    }
}
