package opensdk.sdk.apis.debug.runtimeDebugging;

import opensdk.sdk.apis.constant.UrlConstants;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.klaytn.CustomHttpService;
import org.web3j.protocol.klaytn.Web3j;
import org.web3j.protocol.klaytn.core.method.response.DebugGcStatsResponse;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Debug RPC Test")
public class DebugGCStatsTest {

    private Web3j w3 = Web3j.build(new CustomHttpService(UrlConstants.RPC));

    @Test
    @DisplayName("RPC debug_gcStats")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        DebugGcStatsResponse response = w3.debugGcStats().send();

        assertNotNull(response);
        assertNull(response.getError());
        assertNotNull(response.getResult());
        assertNotNull(response.getResult().getNumGC());
    }
}
