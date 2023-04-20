package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.AdminGetSpamThrottlerCandidateListResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class AdminGetSpamThrottlerCandidateListExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void adminGetSpamThrottlerCandidateListExample() throws IOException {
        AdminGetSpamThrottlerCandidateListResponse response = sdk.admin.getSpamThrottlerCandidateList().send();
        response.getResult();
    }
}
