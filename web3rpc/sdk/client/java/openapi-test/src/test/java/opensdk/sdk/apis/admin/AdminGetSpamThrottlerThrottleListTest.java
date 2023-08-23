package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.AdminGetSpamThrottlerThrottleListResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Admin RPC Test")
public class AdminGetSpamThrottlerThrottleListTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.RPC));

    @Test
    @DisplayName("RPC admin_getSpamThrottlerThrottleListTest")
    void adminGetSpamThrottlerThrottleListTest() throws IOException {
        AdminGetSpamThrottlerThrottleListResponse response = w3.adminGetSpamThrottlerThrottleList().send();

        assertNotNull(response);
        assertNull(response.getError());
        assertNotNull(response.getResult());
        if (!response.getResult().isEmpty()) {
            assertTrue(response.getResult().get(0).matches("^0x[0-9a-fA-F]+$"));
        }
    }
}
