package opensdk.sdk.apis.debug.vMStandardTracing;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugStandardTraceBlockToFileResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import org.web3j.protocol.http.HttpService;
@DisplayName("Debug RPC Test")
public class DebugStandardTraceBlockToFileTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));

    @Test
    @DisplayName("RPC debug_standardTraceBlockToFile")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String blockHash = "0xf1b4df5d4457d4771740887eeb46de3fc26ae4cddf93d69b1b237c2366ff12eb";

        DebugStandardTraceBlockToFileResponse response = w3.debugStandardTraceBlockToFile(blockHash, null).send();

        assertNotNull(response);
        assertNull(response.getError());
    }
}
