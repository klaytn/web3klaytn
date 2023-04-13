package opensdk.sdk.apis.eth.miscellaneous;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthSubmitHashrateResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;


@DisplayName("Eth RPC Test")
public class EthSubmitHashrateTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC eth_submitHashrate")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String hashRate ="0x5";
        String id  = "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef";
        EthSubmitHashrateResponse response = sdk.eth.submitHashrate(hashRate , id).send();
        assertNotNull(response.getResult());
    }

}
