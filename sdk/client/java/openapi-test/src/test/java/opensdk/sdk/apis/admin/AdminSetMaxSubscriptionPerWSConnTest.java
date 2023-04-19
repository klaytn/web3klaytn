package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.AdminSetMaxSubscriptionPerWSConnResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Admin RPC Test")
public class AdminSetMaxSubscriptionPerWSConnTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC admin_setMaxSubscriptionPerWSConn")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        int limit = 5;
        AdminSetMaxSubscriptionPerWSConnResponse response = this.sdk.admin.setMaxSubscriptionPerWSConn(limit).send();
        response.getResult();
    }
}
