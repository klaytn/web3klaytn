package opensdk.sdk.apis.debug.blockchainInspection;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugPrintBlockResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import org.web3j.protocol.http.HttpService;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Debug RPC Test")
public class DebugPrintBlockTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.RPC));

    @Test
    @DisplayName("RPC debug_printBlock")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        DebugPrintBlockResponse response = w3.debugPrintBlock("latest").send();
        assertNotNull(response);
        assertNull(response.getError());

        assertNotNull(response.getResult());
        assertInstanceOf(String.class, response.getResult());
    }
}
