package opensdk.sdk.apis.klay.block;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetStorageAtResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

@DisplayName("Klay RPC Test")
public class KlayGetStorageAtApiTest {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    @Test
    @DisplayName("RPC klay_getStorageAt")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayGetStorageAtResponse response = sdk.klay.getStorageAt(
            "0x295a70b2de5e3953354a6a8344e616ed314d7251",
            "0x0",
            "latest")
        .send();

        assertNotNull(response);
        assertNull(response.getError());
    }
}
