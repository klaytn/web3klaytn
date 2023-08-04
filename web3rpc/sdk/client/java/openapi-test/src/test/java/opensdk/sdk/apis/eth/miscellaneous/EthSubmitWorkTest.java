package opensdk.sdk.apis.eth.miscellaneous;

import opensdk.sdk.apis.constant.UrlConstants;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.core.methods.response.EthSubmitWork;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;


@DisplayName("Eth RPC Test")
public class EthSubmitWorkTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.RPC));
    @Test
    @DisplayName("RPC eth_submitWork")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String nonce = "0x0000000000000001";
        String powHash = "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef";
        String mixDigest = "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef";
        EthSubmitWork response = w3.ethSubmitWork(nonce, powHash, mixDigest).send();
        assertNotNull(response);
        assertNull(response.getError());
        assertNotNull(response.getResult());
    }

}
