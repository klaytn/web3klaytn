package opensdk.sdk.apis.eth.block;

import opensdk.sdk.apis.constant.UrlConstants;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.core.methods.response.EthGetUncleCountByBlockHash;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;


@DisplayName("Eth RPC Test")
public class EthGetUncleCountByBlockHashTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));
    @Test
    @DisplayName("RPC eth_getUncleCountByBlockHash")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String blockHash ="0xc9dbfbab67e9a0508bcb3f95ae408023668cef431b805592781a821926715b8a";
        EthGetUncleCountByBlockHash response = w3.ethGetUncleCountByBlockHash(blockHash).send();
        assertNotNull(response);
        assertNull(response.getError());

        if(response.getResult() != null) {
            assertInstanceOf(String.class, response.getResult());
            assertTrue(response.getResult().matches("^0x[0-9a-fA-F]+$"));
        } else {
            assertNull(response.getResult());
        }
    }

}
