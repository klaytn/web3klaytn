package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.AdminGetSpamThrottlerCandidateListResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Admin RPC Test")
public class AdminGetSpamThrottlerCandidateListTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC admin_getSpamThrottlerCandidateList")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        AdminGetSpamThrottlerCandidateListResponse response = sdk.admin.getSpamThrottlerCandidateList().send();
        response.getResult();
    }
}
