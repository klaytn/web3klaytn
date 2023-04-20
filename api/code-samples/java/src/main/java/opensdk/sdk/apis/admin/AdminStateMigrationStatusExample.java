package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.AdminStateMigrationStatusResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class AdminStateMigrationStatusExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void adminStateMigrationStatusExample() throws IOException {
        AdminStateMigrationStatusResponse response = sdk.admin.stateMigrationStatus().send();
        response.getResult();
    }
}
