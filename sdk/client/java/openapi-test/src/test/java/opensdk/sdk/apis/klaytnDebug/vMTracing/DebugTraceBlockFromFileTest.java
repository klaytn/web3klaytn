package opensdk.sdk.apis.klaytnDebug.vMTracing;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugTraceBlockFromFileResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Debug RPC Test")
public class DebugTraceBlockFromFileTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC debug_debugTraceBlockFromFile")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String fileName = "/home/sotatek/block.rlp";

        DebugTraceBlockFromFileResponse response = sdk.debug.traceBlockFromFile(fileName).send();
        response.getResult();
    }
}
