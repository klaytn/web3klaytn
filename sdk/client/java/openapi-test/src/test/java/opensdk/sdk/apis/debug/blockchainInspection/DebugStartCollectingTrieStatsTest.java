package opensdk.sdk.apis.debug.blockchainInspection;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugStartCollectingTrieStatsResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

@DisplayName("Debug RPC Test")
public class DebugStartCollectingTrieStatsTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC debug_startCollectingTrieStats")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String address = "0x0000000000000000000000000000000000000000";

        DebugStartCollectingTrieStatsResponse response = sdk.debug.startCollectingTrieStats(address).send();

        assertNotNull(response);
        assertNull(response.getError());
    }
}
