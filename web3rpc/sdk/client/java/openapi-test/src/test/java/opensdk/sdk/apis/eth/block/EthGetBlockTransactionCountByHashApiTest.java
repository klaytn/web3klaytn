package opensdk.sdk.apis.eth.block;

import opensdk.sdk.apis.constant.UrlConstants;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.core.methods.response.EthGetBlockTransactionCountByHash;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Eth RPC Test")
public class EthGetBlockTransactionCountByHashApiTest {

    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.RPC));

    @Test
    @DisplayName("RPC eth_getBlockTransactionCountByHash")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        EthGetBlockTransactionCountByHash br = w3.ethGetBlockTransactionCountByHash(
            "0xf54af05b054b05407ba420344757392c2a945fb0206ebe3af302813aba72ee77")
        .send();
        assertNotNull(br);
        assertNull(br.getError());
        assertNotNull(br.getResult());
        assertTrue(br.getResult().matches("^0x[0-9a-fA-F]+$"));
    }
}
