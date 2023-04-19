package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.AdminStopHTTPResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Admin RPC Test")
public class AdminStopHTTPTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC admin_stopHttp")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        AdminStopHTTPResponse response = this.sdk.admin.stopHTTP().send();
        response.getResult();
    }
}
