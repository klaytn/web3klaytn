package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.AdminSetSpamThrottlerWhiteListResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

@DisplayName("Admin RPC Test")
public class AdminSetSpamThrottlerWhiteListTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC admin_setSpamThrottlerWhiteList")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        List<String> addresses = List.of("0xfdeedbb2fe5b48d5b49e435ba00e0358740d0cf5");
        AdminSetSpamThrottlerWhiteListResponse response = sdk.admin.setSpamThrottlerWhiteList(addresses).send();

        assertNotNull(response);
        assertNull(response.getError());
    }
}
