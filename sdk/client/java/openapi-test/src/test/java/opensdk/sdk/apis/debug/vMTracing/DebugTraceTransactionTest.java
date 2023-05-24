package opensdk.sdk.apis.debug.vMTracing;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugTraceTransactionResponse;
import opensdk.sdk.models.TracingOptions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

@DisplayName("Debug RPC Test")
public class DebugTraceTransactionTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    @Test
    @DisplayName("RPC debug_traceTransaction")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String txHash = "0x21b2919b89278ca786226f10edbaadced7381dbd73df546a4823547aaebffa58";
        TracingOptions options = new TracingOptions();
        options.setTrace(TracingOptions.TraceEnum.FASTCALLTRACER);

        DebugTraceTransactionResponse response = sdk.debug.traceTransaction(txHash, options).send();

        assertNotNull(response);
        assertNull(response.getError());
    }
}
