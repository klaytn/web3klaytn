package opensdk.sdk.apis.governance;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.GovernanceVotesResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Governance RPC Test")
public class GovernanceVotesTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC governance_votes")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        GovernanceVotesResponse response = sdk.governance.votes().send();
        response.getResult();
    }
}
