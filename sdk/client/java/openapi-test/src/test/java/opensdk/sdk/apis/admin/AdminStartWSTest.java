package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.AdminStartWSResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

@DisplayName("Admin RPC Test")
public class AdminStartWSTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC admin_startWS")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String host = "127.0.0.1";
        int port = 8552;
        String cors = "";
        String apis = "klay";

        AdminStartWSResponse response = sdk.admin.startWS(host, port, cors, apis).send();

        assertNotNull(response);
        assertNull(response.getError());
    }
}
