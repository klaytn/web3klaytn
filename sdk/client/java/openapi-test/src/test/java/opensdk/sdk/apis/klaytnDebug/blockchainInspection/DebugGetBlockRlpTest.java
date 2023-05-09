package opensdk.sdk.apis.klaytnDebug.blockchainInspection;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugGetBlockRlpResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

@DisplayName("Debug RPC Test")
public class DebugGetBlockRlpTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    @Test
    @DisplayName("RPC debug_getBlockRlp")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        DebugGetBlockRlpResponse response = sdk.debug.getBlockRlp("earliest").send();
        assertNotNull(response);
        assertNull(response.getError());
    }
}
