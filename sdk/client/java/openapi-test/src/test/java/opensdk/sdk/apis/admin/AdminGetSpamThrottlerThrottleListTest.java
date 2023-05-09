package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.AdminGetSpamThrottlerThrottleListResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

@DisplayName("Admin RPC Test")
public class AdminGetSpamThrottlerThrottleListTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC admin_getSpamThrottlerThrottleListTest")
    void adminGetSpamThrottlerThrottleListTest() throws IOException {
        AdminGetSpamThrottlerThrottleListResponse response = sdk.admin.getSpamThrottlerThrottleList().send();

        assertNotNull(response);
        assertNull(response.getError());
    }
}
