package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.AdminNodeInfoResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@DisplayName("Admin RPC Test")
public class AdminNodeInfoTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC admin_nodeInfo")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        AdminNodeInfoResponse response = sdk.admin.nodeInfo().send();
        assertNotNull(response.getResult());
    }
}
