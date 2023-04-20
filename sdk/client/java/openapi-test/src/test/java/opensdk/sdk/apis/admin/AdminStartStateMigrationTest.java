package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.AdminStartStateMigrationResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Admin RPC Test")
public class AdminStartStateMigrationTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC admin_startStateMigration")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        AdminStartStateMigrationResponse response = sdk.admin.startStateMigration().send();
        response.getResult();
    }
}
