package opensdk.sdk.apis.eth.block;

import opensdk.sdk.apis.constant.UrlConstants;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.core.methods.response.EthMining;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

public class EthMiningTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));
    @Test
    @DisplayName("RPC eth_mining")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        EthMining response = w3.ethMining().send();
        assertNotNull(response);
        assertNull(response.getError());

        assertInstanceOf(Boolean.class, response.getResult());
    }
}
