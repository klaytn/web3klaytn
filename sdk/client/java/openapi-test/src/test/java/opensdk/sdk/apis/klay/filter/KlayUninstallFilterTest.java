package opensdk.sdk.apis.klay.filter;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayUninstallFilterResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

public class KlayUninstallFilterTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    @Test
    @DisplayName("RPC klay_uninstallFilter")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String filter = "0xd32fd16b6906e67f6e2b65dcf48fc272";

        KlayUninstallFilterResponse response = sdk.klay.uninstallFilter(filter).send();

        assertNotNull(response);
        assertNull(response.getError());
    }
}
