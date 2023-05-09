package opensdk.sdk.apis.klaytnDebug.vMTracing;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugTraceBadBlockResponse;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

@DisplayName("Debug RPC Test")
public class DebugTraceBadBlockTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    @Disabled
    @Test
    @DisplayName("RPC debug_traceBadBlock")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String blockHash = "0x1d5ba00e313a81ae6d409d459c153327072665d9ea2f47608369722baf0cfbb6";

        DebugTraceBadBlockResponse response = sdk.debug.traceBadBlock(blockHash, null).send();

        assertNotNull(response);
        assertNull(response.getError());
    }
}
