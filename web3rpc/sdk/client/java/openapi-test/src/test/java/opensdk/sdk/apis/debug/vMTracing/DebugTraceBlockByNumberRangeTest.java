package opensdk.sdk.apis.debug.vMTracing;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugTraceBlockByNumberRangeResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;
import java.util.LinkedHashMap;

import org.web3j.protocol.http.HttpService;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Debug RPC Test")
public class DebugTraceBlockByNumberRangeTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.BAOBAB_RPC));

    @Test
    @DisplayName("RPC debug_debugTraceBlockByNumberRange")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        int startBlockNum = 21;
        int endBlockNum = 30;

        DebugTraceBlockByNumberRangeResponse response = w3.debugTraceBlockByNumberRange(startBlockNum, endBlockNum, null).send();

        assertNotNull(response);
        assertNull(response.getError());
        assertNotNull(response.getResult());
        if (response.getResult() instanceof LinkedHashMap<?, ?>) {
            LinkedHashMap<?, ?> result = (LinkedHashMap<?, ?>) response.getResult();
            assertNotNull(result.get("21"));
            if (result.get("21") instanceof LinkedHashMap<?, ?>) {
                LinkedHashMap<?, ?> block = (LinkedHashMap<?, ?>) result.get("21");
                assertTrue((block.get("hash") instanceof String));
                assertTrue(((String) block.get("hash")).matches("^0x[0-9a-fA-F]+$"));
            }
        }
    }
}
