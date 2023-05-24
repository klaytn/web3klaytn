package opensdk.sdk.apis.debug.runtimeDebugging;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugGcStatsResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

@DisplayName("Debug RPC Test")
public class DebugGCStatsTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC debug_gcStats")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        DebugGcStatsResponse response = sdk.debug.gcStats().send();

        assertNotNull(response);
        assertNull(response.getError());
    }
}
