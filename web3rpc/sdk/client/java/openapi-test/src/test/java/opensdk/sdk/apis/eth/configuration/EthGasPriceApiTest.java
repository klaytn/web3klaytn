package opensdk.sdk.apis.eth.configuration;

import opensdk.sdk.apis.constant.UrlConstants;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.core.methods.response.EthGasPrice;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Eth RPC Test")
public class EthGasPriceApiTest {

    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));

    @Test
    @DisplayName("RPC eth_gasPrice")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        EthGasPrice br = w3.ethGasPrice().send();
        assertNotNull(br);
        assertNull(br.getError());
        assertTrue(br.getResult() instanceof String);
        assertTrue(br.getResult().matches("^0x[0-9a-fA-F]+$"));
    }
}
