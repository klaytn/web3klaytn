package opensdk.sdk.apis.klaytnDebug.runtimeDebugging;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugMemStatsResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Debug RPC Test")
public class DebugMemStatsTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC debug_memStats")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        DebugMemStatsResponse response = sdk.debug.memStats().send();
        response.getResult();
    }
}
