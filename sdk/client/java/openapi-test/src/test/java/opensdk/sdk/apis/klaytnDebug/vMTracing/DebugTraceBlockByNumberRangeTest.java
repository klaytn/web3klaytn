package opensdk.sdk.apis.klaytnDebug.vMTracing;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugTraceBlockByNumberRangeResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import org.web3j.protocol.http.HttpService;
@DisplayName("Debug RPC Test")
public class DebugTraceBlockByNumberRangeTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    @Test
    @DisplayName("RPC debug_debugTraceBlockByNumberRange")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        int startBlockNum = 21;
        int endBlockNum = 30;

        DebugTraceBlockByNumberRangeResponse response = w3.debugTraceBlockByNumberRange(startBlockNum, endBlockNum, null).send();

        assertNotNull(response);
        assertNull(response.getError());
    }
}
