package opensdk.sdk.apis.debug.runtimeDebugging;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugStacksResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import org.web3j.protocol.http.HttpService;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Debug RPC Test")
public class DebugStacksTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));

    @Test
    @DisplayName("RPC debug_stacks")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        DebugStacksResponse response = w3.debugStacks().send();

        assertNotNull(response);
        assertNull(response.getError());
        assertNotNull(response.getResult());
        assertInstanceOf(String.class, response.getResult());
    }
}
