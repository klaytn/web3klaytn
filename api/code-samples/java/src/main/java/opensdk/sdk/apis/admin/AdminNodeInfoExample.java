package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.AdminNodeInfoResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class AdminNodeInfoExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void adminNodeInfoExample() throws IOException {
        AdminNodeInfoResponse response = sdk.admin.nodeInfo().send();
        response.getResult();
    }
}
