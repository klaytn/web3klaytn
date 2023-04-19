package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.AdminSetMaxSubscriptionPerWSConnResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class AdminSetMaxSubscriptionPerWSConnExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void adminSetMaxSubscriptionPerWSConnExample() throws IOException {
        int limit = 5;

        AdminSetMaxSubscriptionPerWSConnResponse response = this.sdk.admin.setMaxSubscriptionPerWSConn(limit).send();
        response.getResult();
    }
}
