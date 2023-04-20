package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.AdminGetSpamThrottlerWhiteListResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class AdminGetSpamThrottlerWhiteListExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void adminGetSpamThrottlerWhiteListExample() throws IOException {
        AdminGetSpamThrottlerWhiteListResponse response = sdk.admin.getSpamThrottlerWhiteList().send();
        response.getResult();
    }
}
