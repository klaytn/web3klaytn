package opensdk.sdk.apis.eth.block;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import opensdk.sdk.apis.constant.UrlConstants;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.core.DefaultBlockParameter;
import org.web3j.protocol.core.methods.response.EthBlock;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

@DisplayName("Klay RPC Test")
public class EthGetBlockByNumberApiTest {

    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));

    @Test
    @DisplayName("RPC eth_getBlockByNumber")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        EthBlock er = w3.ethGetBlockByNumber(
            DefaultBlockParameter.valueOf("0x8f668"),
            false)
        .send();
        assertNotNull(er);
        assertNull(er.getError());
    }
}
