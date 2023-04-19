package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.AdminStopHTTPResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class AdminStopHTTPExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void adminStopHttpExample() throws IOException {
        AdminStopHTTPResponse response = this.sdk.admin.stopHTTP().send();
        response.getResult();
    }
}
