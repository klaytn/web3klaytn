package opensdk.sdk.apis.eth.configuration;

import opensdk.sdk.apis.constant.UrlConstants;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.core.methods.response.EthCoinbase;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Eth RPC Test")
public class EthCoinbaseApiTest {

    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));

    @Test
    @DisplayName("RPC eth_coinbase")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        EthCoinbase br = w3.ethCoinbase().send();
        assertNotNull(br);
        assertNull(br.getError());
        assertTrue(br.getResult().matches("^0x.*$"));
    }
}
