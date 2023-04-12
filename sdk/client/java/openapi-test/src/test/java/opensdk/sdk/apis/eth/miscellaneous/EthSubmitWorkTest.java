package opensdk.sdk.apis.eth.miscellaneous;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthSubmitWorkResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertFalse;


@DisplayName("Eth RPC Test")
public class EthSubmitWorkTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);
    @Test
    @DisplayName("RPC eth_submitWork")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String nonce = "0x0000000000000001";
        String powHash = "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef";
        String mixDigest = "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef";
        EthSubmitWorkResponse response = sdk.eth.submitWork(nonce, powHash, mixDigest).send();
        assertFalse(response.getResult());
    }

}
