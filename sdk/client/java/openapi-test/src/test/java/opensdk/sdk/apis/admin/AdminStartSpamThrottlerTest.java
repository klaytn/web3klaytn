package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.AdminStartSpamThrottlerResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Admin RPC Test")
public class AdminStartSpamThrottlerTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC admin_startSpamThrottler")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
//        AdminStartSpamThrottlerResponse response = sdk.admin.startSpamThrottler().send();
//        response.getResult();AdminStartSpamThrottlerResponse response = sdk.admin.startSpamThrottler().send();
//        response.getResult();
    }
}
