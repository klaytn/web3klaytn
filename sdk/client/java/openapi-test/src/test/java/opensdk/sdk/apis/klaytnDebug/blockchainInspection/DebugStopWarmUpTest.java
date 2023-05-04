package opensdk.sdk.apis.klaytnDebug.blockchainInspection;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugStopWarmUpResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Debug RPC Test")
public class DebugStopWarmUpTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC debug_stopWarmUp")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        DebugStopWarmUpResponse response = sdk.debug.stopWarmUp().send();
        response.getResult();
    }
}
