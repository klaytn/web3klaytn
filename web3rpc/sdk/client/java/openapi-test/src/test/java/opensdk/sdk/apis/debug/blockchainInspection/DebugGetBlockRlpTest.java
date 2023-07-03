package opensdk.sdk.apis.debug.blockchainInspection;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugGetBlockRlpResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import org.web3j.protocol.http.HttpService;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Debug RPC Test")
public class DebugGetBlockRlpTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    @Test
    @DisplayName("RPC debug_getBlockRlp")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        DebugGetBlockRlpResponse response = w3.debugGetBlockRlp("earliest").send();
        assertNotNull(response);
        assertNull(response.getError());

        assertNotNull(response.getResult());
        assertInstanceOf(String.class, response.getResult());
    }
}
