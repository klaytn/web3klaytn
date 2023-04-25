package opensdk.sdk.apis.klaytnDebug.blockchainInspection;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugStartCollectingTrieStatsResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Debug RPC Test")
public class DebugStartCollectingTrieStatsTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC debug_startCollectingTrieStats")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String address = "0x0000000000000000000000000000000000000000";

        DebugStartCollectingTrieStatsResponse response = sdk.debug.startCollectingTrieStats(address).send();
        response.getResult();
    }
}
