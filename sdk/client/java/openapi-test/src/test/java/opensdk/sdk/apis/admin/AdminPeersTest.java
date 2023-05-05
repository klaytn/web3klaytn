package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.AdminPeersResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@DisplayName("Admin RPC Test")
public class AdminPeersTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC admin_peers")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        AdminPeersResponse response = sdk.admin.peers().send();
        assertNotNull(response.getResult());
    }
}
