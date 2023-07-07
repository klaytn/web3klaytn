package opensdk.sdk.apis.eth.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.core.methods.response.EthTransaction;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Eth RPC Test")
public class EthGetTransactionByHashTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));
    @Test
    @DisplayName("RPC eth_getTransactionByHash")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String blockHash = "0x0a83919ee23b96cb093012df861e53a6964d92a66ead837f8fc2b146da9b1831";
        EthTransaction response = w3.ethGetTransactionByHash(blockHash).send();
        assertNotNull(response);
        assertNull(response.getError());

        if (response.getResult() != null) {
            assertNotNull(response.getResult().getBlockNumber());
        }
    }
}
