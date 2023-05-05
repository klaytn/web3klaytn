package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.AdminStopStateMigrationResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Admin RPC Test")
public class AdminStopStateMigrationTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC admin_stopStateMigration")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        AdminStopStateMigrationResponse response = sdk.admin.stopStateMigration().send();
        response.getResult();
    }
}
