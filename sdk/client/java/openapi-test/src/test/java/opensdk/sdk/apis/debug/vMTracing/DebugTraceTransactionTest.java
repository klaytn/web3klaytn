package opensdk.sdk.apis.debug.vMTracing;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugTraceTransactionResponse;
import org.web3j.protocol.klaytn.core.method.response.TracingOptions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import org.web3j.protocol.http.HttpService;
@DisplayName("Debug RPC Test")
public class DebugTraceTransactionTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    @Test
    @DisplayName("RPC debug_traceTransaction")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String txHash = "0x21b2919b89278ca786226f10edbaadced7381dbd73df546a4823547aaebffa58";
        TracingOptions options = new TracingOptions();
        options.setTrace(TracingOptions.TraceEnum.FASTCALLTRACER);

        DebugTraceTransactionResponse response = w3.debugTraceTransaction(txHash, options).send();

        assertNotNull(response);
        assertNull(response.getError());
    }
}
