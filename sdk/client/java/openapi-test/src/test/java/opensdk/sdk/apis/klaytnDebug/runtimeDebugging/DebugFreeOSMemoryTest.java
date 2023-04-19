package opensdk.sdk.apis.klaytnDebug.runtimeDebugging;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugFreeOSMemoryResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Debug RPC Test")
public class DebugFreeOSMemoryTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC debug_freeOSMemory")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        DebugFreeOSMemoryResponse response = sdk.debug.freeOSMemory().send();
        response.getResult();
    }
}
