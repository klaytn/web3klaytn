package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.AdminSaveTrieNodeCacheToDiskResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Admin RPC Test")
public class AdminSaveTrieNodeCacheToDiskTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC admin_saveTrieNodeCacheToDisk")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        AdminSaveTrieNodeCacheToDiskResponse response = this.sdk.admin.saveTrieNodeCacheToDisk().send();
        response.getResult();
    }
}
