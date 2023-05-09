package opensdk.sdk.apis.klay.others;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayNodeAddressResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;


@DisplayName("Klay RPC Test")
public class KlayGetNodeAddressTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    @Test
    @DisplayName("RPC klay_getNodeAddress")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayNodeAddressResponse response = sdk.klay.nodeAddress().send();

        assertNotNull(response);
        assertNull(response.getError());
    }
}
