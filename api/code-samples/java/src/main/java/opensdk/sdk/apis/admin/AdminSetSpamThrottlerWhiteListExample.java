package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.AdminSetSpamThrottlerWhiteListResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;
import java.util.List;

public class AdminSetSpamThrottlerWhiteListExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void adminSetSpamThrottlerWhiteListExample() throws IOException {
        List<String> addresses = List.of("0xfdeedbb2fe5b48d5b49e435ba00e0358740d0cf5");
        AdminSetSpamThrottlerWhiteListResponse response = sdk.admin.setSpamThrottlerWhiteList(addresses).send();
        response.getResult();
    }
}
