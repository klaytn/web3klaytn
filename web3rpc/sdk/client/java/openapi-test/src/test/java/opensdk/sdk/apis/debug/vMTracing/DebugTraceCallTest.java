package opensdk.sdk.apis.debug.vMTracing;

import opensdk.sdk.apis.constant.UrlConstants;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;
import org.web3j.protocol.klaytn.core.method.response.DebugTraceCallResponse;

@DisplayName("Debug RPC Test")
public class DebugTraceCallTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.BAOBAB_RPC));

    @Disabled
    @Test
    @DisplayName("RPC debug_traceCall")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        Object tracerCallObject = {"to":"0x46eda75e7ca73cb1c2f83c3927211655420dbc44","data":"0x3fb5c1cb00000000000000000000000000000000000000000000000000000000000003e7"}
        String blockNumber = "latest"
        Object traceObject = {"tracer":"revertTracer"}
        DebugTraceCallResponse response = w3.debugTraceCall(tracerCallObject, blockNumber, traceObject, null).send();

        assertNotNull(response);
        assertNull(response.getError());
        assertNotNull(response.getResult());
    }
}
