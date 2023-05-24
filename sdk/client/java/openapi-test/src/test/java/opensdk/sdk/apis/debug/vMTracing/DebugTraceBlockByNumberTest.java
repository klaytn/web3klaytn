package opensdk.sdk.apis.debug.vMTracing;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugTraceBlockByNumberResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

@DisplayName("Debug RPC Test")
public class DebugTraceBlockByNumberTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    @Test
    @DisplayName("RPC debug_traceBlockByNumber")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        int blockNum = 21;

        DebugTraceBlockByNumberResponse response = sdk.debug.traceBlockByNumber(blockNum, null).send();

        assertNotNull(response);
        assertNull(response.getError());
    }
}
