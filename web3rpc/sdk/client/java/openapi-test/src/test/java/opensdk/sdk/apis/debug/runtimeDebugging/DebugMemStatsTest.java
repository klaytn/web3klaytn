package opensdk.sdk.apis.debug.runtimeDebugging;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugMemStatsResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import org.web3j.protocol.http.HttpService;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Debug RPC Test")
public class DebugMemStatsTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.RPC));

    @Test
    @DisplayName("RPC debug_memStats")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        DebugMemStatsResponse response = w3.debugMemStats().send();

        assertNotNull(response);
        assertNull(response.getError());

        assertNotNull(response.getResult());
        assertDoesNotThrow(() -> {
            Integer.parseInt(response.getResult().getNumGC());
        });
    }
}
