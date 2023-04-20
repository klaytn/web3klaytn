package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.AdminSpamThrottlerConfigResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class AdminSpamThrottlerConfigExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void adminSpamThrottlerConfigExample() throws IOException {
        AdminSpamThrottlerConfigResponse response = this.sdk.admin.spamThrottlerConfig().send();
        response.getResult();
    }
}
