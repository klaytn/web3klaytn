package opensdk.sdk.apis.klaytnDebug.profiling;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugIsPProfRunningResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Debug RPC Test")
public class DebugIsPProfRunningTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC debug_cpuProfile")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        DebugIsPProfRunningResponse response = sdk.debug.isPProfRunning().send();
        response.getResult();
    }
}
