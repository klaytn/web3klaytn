package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.AdminStopSpamThrottlerResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class AdminStopSpamThrottlerExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void adminStopSpamThrottlerExample() throws IOException {
        AdminStopSpamThrottlerResponse response = sdk.admin.stopSpamThrottler().send();
        response.getResult();
    }
}
