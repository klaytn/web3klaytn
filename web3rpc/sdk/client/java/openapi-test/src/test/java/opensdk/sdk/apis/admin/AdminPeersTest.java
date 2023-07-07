package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.core.methods.response.admin.AdminPeers;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;
import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Admin RPC Test")
public class AdminPeersTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));

    @Test
    @DisplayName("RPC admin_peers")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        AdminPeers response = w3.adminPeers().send();

        assertNotNull(response);
        assertNull(response.getError());
        if (!response.getResult().isEmpty()) {
            assertNotNull(response.getResult().get(0).getName());
        }
    }
}
