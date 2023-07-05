package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.AdminStopSpamThrottlerResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

@DisplayName("Admin RPC Test")
public class AdminStopSpamThrottlerTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    @Test
    @DisplayName("RPC admin_stopSpamThrottler")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        AdminStopSpamThrottlerResponse response = w3.adminStopSpamThrottler().send();

        assertNotNull(response);
        assertNull(response.getError());
    }
}
