package opensdk.sdk.apis.debug.blockchainInspection;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugGetModifiedAccountsByHashResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import org.web3j.protocol.http.HttpService;
@DisplayName("Debug RPC Test")
public class DebugGetModifiedAccountsByHashTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    @Test
    @DisplayName("RPC debug_getModifiedAccountsByHash")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String startBlockHash = "0xcc1ac1e244f9f83b812b5d77ada1c399f02ea7b61e72ff31789d9ef6dad45442";
        String endBlockHash = "0x437e92b2d30a0a828dfdd23b837a8ddf8c8b79c222e191d16c47afbf5a6aaed7";
        DebugGetModifiedAccountsByHashResponse response = w3.debugGetModifiedAccountsByHash(startBlockHash, endBlockHash).send();
        assertNotNull(response);
        assertNull(response.getError());
    }
}
