package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.AdminPeersResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class AdminPeersExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void adminPeersExample() throws IOException {
        AdminPeersResponse response = sdk.admin.peers().send();
        response.getResult();
    }
}
