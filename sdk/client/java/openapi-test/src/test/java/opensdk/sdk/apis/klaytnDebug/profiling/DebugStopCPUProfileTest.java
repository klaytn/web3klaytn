package opensdk.sdk.apis.klaytnDebug.profiling;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugStopCPUProfileResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Debug RPC Test")
public class DebugStopCPUProfileTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC debug_stopCPUProfile")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        DebugStopCPUProfileResponse response = sdk.debug.stopCPUProfile().send();
        response.getResult();
    }
}
