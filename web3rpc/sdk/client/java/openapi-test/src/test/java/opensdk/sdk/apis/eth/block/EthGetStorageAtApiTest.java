package opensdk.sdk.apis.eth.block;

import opensdk.sdk.apis.constant.UrlConstants;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.core.DefaultBlockParameter;
import org.web3j.protocol.core.methods.response.EthGetStorageAt;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;
import java.math.BigInteger;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Eth RPC Test")
public class EthGetStorageAtApiTest {

    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.RPC));

    @Test
    @DisplayName("RPC eth_getStorageAt")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        EthGetStorageAt br = w3.ethGetStorageAt(
            "0x295a70b2de5e3953354a6a8344e616ed314d7251",
            BigInteger.valueOf(0),
            DefaultBlockParameter.valueOf("latest"))
        .send();
        assertNotNull(br);
        assertNull(br.getError());

        assertInstanceOf(String.class, br.getResult());
        assertTrue(br.getResult().matches("^0x[a-f0-9]+"));
    }
}
