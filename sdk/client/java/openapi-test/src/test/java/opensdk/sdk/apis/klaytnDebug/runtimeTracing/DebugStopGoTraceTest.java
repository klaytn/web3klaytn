package opensdk.sdk.apis.klaytnDebug.runtimeTracing;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugStopGoTraceResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Debug RPC Test")
public class DebugStopGoTraceTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC debug_stopGoTrace")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        DebugStopGoTraceResponse response = sdk.debug.stopGoTrace().send();
        response.getResult();
    }
}
