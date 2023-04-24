package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.AdminStartSpamThrottlerResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class AdminStartSpamThrottlerExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void adminStartSpamThrottlerExample() throws IOException {
        AdminStartSpamThrottlerResponse response = sdk.admin.startSpamThrottler().send();
        response.getResult();
    }
}
