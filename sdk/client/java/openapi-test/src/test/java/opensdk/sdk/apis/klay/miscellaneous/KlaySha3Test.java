package opensdk.sdk.apis.klay.miscellaneous;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlaySha3Response;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

public class KlaySha3Test {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    @Test
    @DisplayName("RPC klay_sha3")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String data = "0x11223344";
        KlaySha3Response response = sdk.klay.sha3(data ).send();

        assertNotNull(response);
        assertNull(response.getError());
    }
}
