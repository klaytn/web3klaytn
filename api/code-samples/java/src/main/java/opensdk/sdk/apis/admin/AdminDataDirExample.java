package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.AdminDatadirResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class AdminDataDirExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void adminDataDirExample() throws IOException {
        AdminDatadirResponse response = sdk.admin.datadir().send();
        response.getResult();
    }
}
