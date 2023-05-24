package opensdk.sdk.apis.debug.profiling;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugIsPProfRunningResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

@DisplayName("Debug RPC Test")
public class DebugIsPProfRunningTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC debug_isPProfRunning")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        DebugIsPProfRunningResponse response = sdk.debug.isPProfRunning().send();

        assertNotNull(response);
        assertNull(response.getError());
    }
}
