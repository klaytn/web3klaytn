package opensdk.sdk.apis.eth.block;

import opensdk.sdk.apis.constant.UrlConstants;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.core.DefaultBlockParameter;
import org.web3j.protocol.core.methods.response.EthGetBlockTransactionCountByNumber;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

@DisplayName("Eth RPC Test")

public class EthGetBlockTransactionCountByNumberTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));
    @Test
    @DisplayName("RPC eth_getBlockTransactionCountByNumber")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        EthGetBlockTransactionCountByNumber response = w3.ethGetBlockTransactionCountByNumber(
            DefaultBlockParameter.valueOf("0xe8"))
        .send();
        assertNotNull(response);
        assertNull(response.getError());
    }
}
