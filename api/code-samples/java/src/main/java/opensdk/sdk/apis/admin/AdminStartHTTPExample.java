package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.AdminStartHTTPResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class AdminStartHTTPExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void adminStartHTTPExample() throws IOException {
        AdminStartHTTPResponse response = this.sdk.admin.startHTTP().send();
        response.getResult();
    }
}
