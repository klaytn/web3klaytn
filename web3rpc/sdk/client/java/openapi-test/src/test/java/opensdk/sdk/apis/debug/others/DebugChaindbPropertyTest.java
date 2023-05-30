package opensdk.sdk.apis.debug.others;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugChaindbPropertyResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import org.web3j.protocol.http.HttpService;
@DisplayName("Debug RPC Test")
public class DebugChaindbPropertyTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));

    @Test
    @DisplayName("RPC debug_chaindbProperty")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String property = "0xe17d821e9a8a8736b9aea8c2de1f3a4934ac0a2f";

        DebugChaindbPropertyResponse response = w3.debugChaindbProperty(property).send();
        response.getResult();
    }
}
