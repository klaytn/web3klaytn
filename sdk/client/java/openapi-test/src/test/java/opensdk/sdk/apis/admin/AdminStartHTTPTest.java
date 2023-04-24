package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.AdminStartHTTPResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Admin RPC Test")
public class AdminStartHTTPTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC admin_startHttp")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
//        AdminStartHTTPResponse response = sdk.admin.startHTTP("127.0.0.1", 8551,"","klay").send();
//        response.getResult();
    }
}
