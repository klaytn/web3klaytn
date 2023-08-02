package opensdk.sdk.apis.eth.block;

import opensdk.sdk.apis.constant.UrlConstants;
//import org.web3j.protocol.klaytn.core.method.response.EthGetHeaderByHashResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Eth RPC Test")
public class EthGetHeaderByHashApiTest {

    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));

    @Test
    @DisplayName("RPC eth_getHeaderByHash")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
//        EthGetHeaderByHashResponse br = w3.ethGetHeaderByHash(
//            "0x21509a5aa2c03e9c99e3320cc7805c601b370c6a4529b29000fd8e2360d8c659")
//        .send();
//        assertNotNull(br);
//        assertNull(br.getError());
//        if (br.getResult() != null) {
//            assertTrue(br.getResult().getHash().matches("^0x.*$"));
//        }
    }
}
