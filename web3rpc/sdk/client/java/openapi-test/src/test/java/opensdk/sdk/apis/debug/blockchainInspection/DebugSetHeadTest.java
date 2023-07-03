package opensdk.sdk.apis.debug.blockchainInspection;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugSetHeadResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import org.web3j.protocol.http.HttpService;
@DisplayName("Debug RPC Test")
public class DebugSetHeadTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));

    @Test
    @DisplayName("RPC debug_setHead")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        DebugSetHeadResponse response = w3.debugSetHead("0x100").send();
        assertNotNull(response);
        assertNull(response.getError());

        assertNull(response.getResult());
    }
}
