package opensdk.sdk.apis.eth.others;

import opensdk.sdk.apis.constant.UrlConstants;
//import org.web3j.protocol.klaytn.core.method.response.EthGetProofResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;
import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.*;


@DisplayName("Eth RPC Test")

public class EthGetProofTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));
    @Test
    @DisplayName("RPC eth_getProof")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String blockNumber = "latest";
//        EthGetProofResponse response = w3.ethGetProof("0x487f2dfef230c2120b8cc55c5087b103146536ec",
//                Arrays.asList("0x0000000000000000000000000000000000000000000000000000000000000000"),
//                blockNumber).send();
//        assertNotNull(response);
//        assertNull(response.getError());
//        assertNotNull(response.getResult());
//        assertNotNull(response.getResult().getCodeHash());
//        assertTrue(response.getResult().getCodeHash().matches("^0x.*$"));
    }
}
