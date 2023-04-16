package opensdk.sdk.apis.klaytnDebug.runtimeDebugging;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugGcStatsResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Debug RPC Test")
public class DebugGcStatsTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC debug_stopPProf")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        DebugGcStatsResponse response = sdk.debug.gcStats().send();
        response.getResult();
    }
}
