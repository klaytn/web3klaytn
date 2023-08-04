package opensdk.sdk.apis.eth.block;

import opensdk.sdk.apis.constant.UrlConstants;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.core.DefaultBlockParameter;
import org.web3j.protocol.core.methods.response.EthBlock;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;
import java.math.BigInteger;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Klay RPC Test")
public class EthGetBlockByNumberApiTest {

    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.RPC));

    @Test
    @DisplayName("RPC eth_getBlockByNumber")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        EthBlock er = w3.ethGetBlockByNumber(
            DefaultBlockParameter.valueOf(BigInteger.valueOf(1)),
            true)
        .send();
        assertNotNull(er);
        assertNull(er.getError());
        if (er.getResult() != null) {
            assertNotNull(er.getResult().getNumberRaw());
            assertTrue(er.getResult().getNumberRaw().matches("^0x.*$"));
        }
    }
}
