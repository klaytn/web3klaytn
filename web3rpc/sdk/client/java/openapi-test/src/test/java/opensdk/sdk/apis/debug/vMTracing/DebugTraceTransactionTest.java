package opensdk.sdk.apis.debug.vMTracing;

import opensdk.sdk.apis.constant.UrlConstants;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;
import org.web3j.protocol.klaytn.core.method.response.DebugTraceTransactionResponse;
import org.web3j.protocol.klaytn.core.method.response.TracingOptions;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

@DisplayName("Debug RPC Test")
public class DebugTraceTransactionTest {
    private Web3j w3 = Web3j.build(new HttpService("http://localhost:8551"));

    @Test
    @DisplayName("RPC debug_traceTransaction")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String txHash = "0xa4c5d58408d2c0454f14ce9cc538b916385621bbc1c26abe2e28b80bdcb889b1";
        TracingOptions options = new TracingOptions();
        options.setTrace(TracingOptions.TraceEnum.FASTCALLTRACER);

        DebugTraceTransactionResponse response = w3.debugTraceTransaction(txHash, options).send();

        assertNotNull(response);
        assertNull(response.getError());
        assertNotNull(response.getResult());
        assertNotNull(response.getResult().getGas());
    }
}
