package opensdk.sdk.apis.eth.block;

import opensdk.sdk.apis.constant.UrlConstants;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.core.methods.response.EthBlock;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Klay RPC Test")
public class EthGetBlockByHashApiTest {

    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));

    @Test
    @DisplayName("RPC eth_getBlockByHash")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        EthBlock br = w3.ethGetBlockByHash(
            "0x21509a5aa2c03e9c99e3320cc7805c601b370c6a4529b29000fd8e2360d8c659",
            true)
        .send();
        assertNotNull(br);
        assertNull(br.getError());
        if(br.getResult() != null) {
            assertTrue(br.getResult().getHash().matches("^0x.*$"));
        }
    }
}
