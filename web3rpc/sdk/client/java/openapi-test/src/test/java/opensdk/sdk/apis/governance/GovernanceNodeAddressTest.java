package opensdk.sdk.apis.governance;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.GovernanceNodeAddressResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Governance RPC Test")
public class GovernanceNodeAddressTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.RPC));

    @Test
    @DisplayName("RPC governance_nodeAddress")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        GovernanceNodeAddressResponse response = w3.governanceNodeAddress().send();
        assertNotNull(response);
        assertNull(response.getError());
        assertTrue(response.getResult() instanceof String);
        assertTrue(((String) response.getResult()).matches("^0x[0-9a-fA-F]+$"));
    }
}
