package opensdk.sdk.apis.klaytnDebug.blockchainInspection;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugGetBadBlocksResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Debug RPC Test")
public class DebugGetBadBlocksTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    @Test
    @DisplayName("RPC debug_getBadBlocks")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        DebugGetBadBlocksResponse response = sdk.debug.getBadBlocks().send();
        response.getResult();
    }
}
