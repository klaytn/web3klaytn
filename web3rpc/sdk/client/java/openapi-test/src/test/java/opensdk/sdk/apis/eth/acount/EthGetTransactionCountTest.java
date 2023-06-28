package opensdk.sdk.apis.eth.acount;

import opensdk.sdk.apis.constant.UrlConstants;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.core.DefaultBlockParameter;
import org.web3j.protocol.core.methods.response.EthGetTransactionCount;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;


@DisplayName("Eth RPC Test")
public class EthGetTransactionCountTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));
    @Test
    @DisplayName("RPC eth_getTransactionCount")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String address = "0xc94770007dda54cF92009BFF0dE90c06F603a09f";
        EthGetTransactionCount response = w3.ethGetTransactionCount(
            address,
            DefaultBlockParameter.valueOf("latest"))
        .send();
        assertNotNull(response);
        assertNull(response.getError());

        assertInstanceOf(String.class, response.getResult());
        assertTrue(response.getResult().matches("^0x[0-9a-fA-F]+$"));
    }
}
