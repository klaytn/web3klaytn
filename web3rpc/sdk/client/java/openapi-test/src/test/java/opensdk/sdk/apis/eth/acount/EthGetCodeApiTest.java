package opensdk.sdk.apis.eth.acount;

import opensdk.sdk.apis.constant.UrlConstants;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.core.DefaultBlockParameter;
import org.web3j.protocol.core.methods.response.EthGetCode;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;
import java.math.BigInteger;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Eth RPC Test")
public class EthGetCodeApiTest {

    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));

    @Test
    @DisplayName("RPC eth_getCode")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        EthGetCode br = w3.ethGetCode(
            "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
            DefaultBlockParameter.valueOf(BigInteger.valueOf(2)))
        .send();
        assertNotNull(br);
        assertNull(br.getError());
        assertTrue(br.getResult().matches("^0x.*$"));
    }
}
