package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.AdminGetSpamThrottlerThrottleListResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class AdminGetSpamThrottlerThrottleListExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void adminGetSpamThrottlerThrottleListExample() throws IOException {
        AdminGetSpamThrottlerThrottleListResponse response = sdk.admin.getSpamThrottlerThrottleList().send();
        response.getResult();
    }
}
