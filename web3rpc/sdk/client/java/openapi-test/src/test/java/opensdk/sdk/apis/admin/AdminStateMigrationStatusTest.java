package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.AdminStateMigrationStatusResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Admin RPC Test")
public class AdminStateMigrationStatusTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));

    @Test
    @DisplayName("RPC admin_stateMigrationStatus")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        AdminStateMigrationStatusResponse response = w3.adminStateMigrationStatus().send();

        assertNotNull(response);
        assertNull(response.getError());
        assertNotNull(response.getResult());
        assertNotNull(response.getResult().getCommitted());
    }
}
