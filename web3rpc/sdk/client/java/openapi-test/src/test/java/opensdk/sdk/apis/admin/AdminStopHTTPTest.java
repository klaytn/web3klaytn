package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.AdminStopHTTPResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Admin RPC Test")
public class AdminStopHTTPTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.RPC));

    @Test
    @DisplayName("RPC admin_stopHttp")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        AdminStopHTTPResponse response = w3.adminStopHTTP().send();

        assertNotNull(response);
        assertNull(response.getError());
        assertNotNull(response.getResult());
    }
}
