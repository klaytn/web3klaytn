package opensdk.sdk.apis.eth.filter;

import opensdk.sdk.apis.constant.UrlConstants;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.core.methods.response.EthFilter;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Eth RPC Test")
public class EthNewBlockFilterTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));
    @Test
    @DisplayName("RPC eth_newBlockFilter")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        EthFilter response = w3.ethNewBlockFilter().send();
        assertNotNull(response);
        assertNull(response.getError());

        assertNotNull(response.getResult());
        assertTrue(response.getResult().matches("^0x[0-9a-fA-F]+$"));
    }
}
