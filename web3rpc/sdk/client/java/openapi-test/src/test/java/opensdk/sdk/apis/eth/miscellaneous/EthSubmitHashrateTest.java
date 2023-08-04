package opensdk.sdk.apis.eth.miscellaneous;

import opensdk.sdk.apis.constant.UrlConstants;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.core.methods.response.EthSubmitHashrate;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;


@DisplayName("Eth RPC Test")
public class EthSubmitHashrateTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.RPC));

    @Test
    @DisplayName("RPC eth_submitHashrate")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String hashRate ="0x5";
        String id  = "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef";
        EthSubmitHashrate response = w3.ethSubmitHashrate(hashRate , id).send();
        assertNotNull(response);
        assertNull(response.getError());
        assertNotNull(response.getResult());
    }

}
