package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.AdminSetSpamThrottlerWhiteListResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

@DisplayName("Admin RPC Test")
public class AdminSetSpamThrottlerWhiteListTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.RPC));

    @Test
    @DisplayName("RPC admin_setSpamThrottlerWhiteList")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        List<String> addresses = List.of("0xfdeedbb2fe5b48d5b49e435ba00e0358740d0cf5");
        AdminSetSpamThrottlerWhiteListResponse response = w3.adminSetSpamThrottlerWhiteList(addresses).send();

        assertNotNull(response);
        assertNull(response.getError());
        assertNull(response.getResult());
    }
}
