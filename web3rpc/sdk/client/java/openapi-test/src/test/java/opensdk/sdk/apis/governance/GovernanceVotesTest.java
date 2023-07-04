package opensdk.sdk.apis.governance;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.GovernanceVotesResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;
import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Governance RPC Test")
public class GovernanceVotesTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));

    @Test
    @DisplayName("RPC governance_votes")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        GovernanceVotesResponse response = w3.governanceVotes().send();
        assertNotNull(response);
        assertNull(response.getError());
        assertTrue(response.getResult() instanceof ArrayList<?>);
    }
}
