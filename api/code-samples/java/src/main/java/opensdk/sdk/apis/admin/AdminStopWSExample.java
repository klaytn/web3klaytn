package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.AdminStopWSResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class AdminStopWSExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void adminStopWSExample() throws IOException {
        AdminStopWSResponse response = sdk.admin.stopWS().send();
        response.getResult();
    }
}
