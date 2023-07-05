package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.AdminStartSpamThrottlerResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

@DisplayName("Admin RPC Test")
public class AdminStartSpamThrottlerTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));

    @Test
    @DisplayName("RPC admin_startSpamThrottler")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        AdminStartSpamThrottlerResponse response = w3.adminStartSpamThrottler().send();

        assertNotNull(response);
        assertNull(response.getError());
        assertNull(response.getResult());
    }
}
