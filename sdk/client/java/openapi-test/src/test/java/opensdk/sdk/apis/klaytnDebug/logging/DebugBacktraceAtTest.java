package opensdk.sdk.apis.klaytnDebug.logging;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugBacktraceAtResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Debug RPC Test")
public class DebugBacktraceAtTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC debug_backTraceAt")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String location = "server.go:443";

        DebugBacktraceAtResponse response = sdk.debug.backtraceAt(location).send();
        response.getResult();
    }
}
