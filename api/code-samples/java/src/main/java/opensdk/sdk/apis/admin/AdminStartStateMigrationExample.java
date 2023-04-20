package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.AdminStartStateMigrationResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class AdminStartStateMigrationExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void adminStartStateMigrationExample() throws IOException {
        AdminStartStateMigrationResponse response = sdk.admin.startStateMigration().send();
        response.getResult();
    }
}
