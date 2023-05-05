package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.AdminStopStateMigrationResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class AdminStopStateMigrationExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void adminStopStateMigrationExample() throws IOException {
        AdminStopStateMigrationResponse response = sdk.admin.stopStateMigration().send();
        response.getResult();
    }
}
