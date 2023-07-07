package opensdk.sdk.apis.debug.runtimeDebugging;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugMetricsResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;
import java.util.ArrayList;
import java.util.LinkedHashMap;

import org.web3j.protocol.http.HttpService;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Debug RPC Test")
public class DebugMetricsTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));

    @Test
    @DisplayName("RPC debug_metrics")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        boolean raw = true;

        DebugMetricsResponse response = w3.debugMetrics(raw).send();

        assertNotNull(response);
        assertNull(response.getError());
        assertNotNull(response.getResult());
        if (response.getResult() instanceof LinkedHashMap<?, ?>) {
            assertTrue(((LinkedHashMap<?, ?>) response.getResult()).size() > 0);
        }
    }
}
