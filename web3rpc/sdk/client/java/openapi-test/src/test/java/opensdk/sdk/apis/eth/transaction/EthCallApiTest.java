package opensdk.sdk.apis.eth.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;
import org.web3j.protocol.core.DefaultBlockParameter;
import org.web3j.protocol.core.methods.request.Transaction;
import org.web3j.protocol.core.methods.response.EthCall;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Eth RPC Test")
class EthCallApiTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    @Test
    @DisplayName("RPC eth_call")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        EthCall cr = w3.ethCall(
            Transaction.createEthCallTransaction(
                "0xca7a99380131e6c76cfa622396347107aeedca2d",
                "0xbE3892d33620bE5aca8c75D39e7401871194d290",
                "0x2e64cec1"),
            DefaultBlockParameter.valueOf("latest"))
        .send();
        assertNotNull(cr);
        assertNull(cr.getError());
        assertTrue(cr.getResult().matches("^0x[0-9a-fA-F]*$"));
    }
}
