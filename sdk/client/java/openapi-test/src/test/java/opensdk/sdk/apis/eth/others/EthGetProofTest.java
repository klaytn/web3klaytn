package opensdk.sdk.apis.eth.others;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.EthGetProofResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;
import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;


@DisplayName("Eth RPC Test")

public class EthGetProofTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));
    @Test
    @DisplayName("RPC eth_getProof")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String blockNumber = "latest";
        EthGetProofResponse response = w3.ethGetProof("0xe5cB067E90D5Cd1F8052B83562Ae670bA4A211a8",
                Arrays.asList("0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421"),
                blockNumber).send();
        assertNotNull(response);
        assertNull(response.getError());
    }
}
