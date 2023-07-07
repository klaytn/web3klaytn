package opensdk.sdk.apis.eth.miscellaneous;

import opensdk.sdk.apis.constant.UrlConstants;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.core.methods.response.EthHashrate;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Eth RPC Test")
public class EthHashrateTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));
    @Test
    @DisplayName("RPC eth_hashrate")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        EthHashrate response = w3.ethHashrate().send();
        assertNotNull(response);
        assertNull(response.getError());

        assertNotNull(response.getResult());
        assertTrue(response.getResult().matches("^0x[0-9a-fA-F]+$"));
    }

}
