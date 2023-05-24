package opensdk.sdk.apis.debug.blockchainInspection;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugStopWarmUpResponse;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

@DisplayName("Debug RPC Test")
public class DebugStopWarmUpTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Disabled
    @Test
    @DisplayName("RPC debug_stopWarmUp")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        DebugStopWarmUpResponse response = sdk.debug.stopWarmUp().send();
        assertNotNull(response);
        assertNull(response.getError());
    }
}
