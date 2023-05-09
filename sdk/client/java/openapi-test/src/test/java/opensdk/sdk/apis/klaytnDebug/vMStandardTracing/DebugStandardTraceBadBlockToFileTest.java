package opensdk.sdk.apis.klaytnDebug.vMStandardTracing;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugStandardTraceBlockToFileResponse;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

public class DebugStandardTraceBadBlockToFileTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    @Disabled
    @Test
    @DisplayName("RPC debug_standardTraceBadBlockToFile")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String blockHash = "0x1d5ba00e313a81ae6d409d459c153327072665d9ea2f47608369722baf0cfbb6";

        DebugStandardTraceBlockToFileResponse response = sdk.debug.standardTraceBlockToFile(blockHash, null).send();

        assertNotNull(response);
        assertNull(response.getError());
    }
}
