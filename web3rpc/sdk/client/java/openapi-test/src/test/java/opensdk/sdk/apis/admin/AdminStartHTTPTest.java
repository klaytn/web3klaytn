package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.AdminStartHTTPResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Admin RPC Test")
public class AdminStartHTTPTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.RPC));

    @Test
    @DisplayName("RPC admin_startHttp")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String adminHost = "127.0.0.1";
        int port = 8551;
        String cors = "";
        String apis = "klay";

        AdminStartHTTPResponse response = w3.adminStartHTTP(adminHost, port, cors, apis).send();

        assertNotNull(response);
        assertNull(response.getError());

        assertNotNull(response.getResult());
        assertInstanceOf(Boolean.class, response.getResult());
    }
}
