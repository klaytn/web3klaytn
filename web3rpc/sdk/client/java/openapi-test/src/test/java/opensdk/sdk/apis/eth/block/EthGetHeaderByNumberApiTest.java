package opensdk.sdk.apis.eth.block;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.EthGetHeaderByNumberResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Eth RPC Test")
public class EthGetHeaderByNumberApiTest {

    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.RPC));

    @Test
    @DisplayName("RPC eth_getHeaderByNumber")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        EthGetHeaderByNumberResponse br = w3.ethGetHeaderByNumber(
            "0x1b4")
        .send();
        assertNotNull(br);
        assertNull(br.getError());
        if (br.getResult() != null) {
            assertTrue(br.getResult().getHash().matches("^0x.*$"));
        }
    }
}
