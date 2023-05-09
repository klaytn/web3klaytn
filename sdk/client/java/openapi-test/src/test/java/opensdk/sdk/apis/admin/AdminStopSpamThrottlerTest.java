package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.AdminStopSpamThrottlerResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

@DisplayName("Admin RPC Test")
public class AdminStopSpamThrottlerTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    @Test
    @DisplayName("RPC admin_stopSpamThrottler")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        AdminStopSpamThrottlerResponse response = sdk.admin.stopSpamThrottler().send();

        assertNotNull(response);
        assertNull(response.getError());
    }
}
