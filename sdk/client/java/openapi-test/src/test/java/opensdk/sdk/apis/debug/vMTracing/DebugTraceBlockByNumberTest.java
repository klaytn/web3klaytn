package opensdk.sdk.apis.debug.vMTracing;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugTraceBlockByNumberResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import org.web3j.protocol.http.HttpService;
@DisplayName("Debug RPC Test")
public class DebugTraceBlockByNumberTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    @Test
    @DisplayName("RPC debug_traceBlockByNumber")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        int blockNum = 21;

        DebugTraceBlockByNumberResponse response = w3.debugTraceBlockByNumber(blockNum, null).send();

        assertNotNull(response);
        assertNull(response.getError());
    }
}
