package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.AdminSaveTrieNodeCacheToDiskResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class AdminSaveTrieNodeCacheToDiskExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void adminSaveTrieNodeCacheToDiskExample() throws IOException {
        AdminSaveTrieNodeCacheToDiskResponse response = sdk.admin.saveTrieNodeCacheToDisk().send();
        response.getResult();
    }
}
