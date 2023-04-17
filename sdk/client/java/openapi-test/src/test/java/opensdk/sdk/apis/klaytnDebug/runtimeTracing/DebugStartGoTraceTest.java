package opensdk.sdk.apis.klaytnDebug.runtimeTracing;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugStartGoTraceResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Debug RPC Test")
public class DebugStartGoTraceTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC debug_startGoTrace")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String file = "go.trace";

        DebugStartGoTraceResponse response = sdk.debug.startGoTrace(file).send();
        response.getResult();
    }
}
