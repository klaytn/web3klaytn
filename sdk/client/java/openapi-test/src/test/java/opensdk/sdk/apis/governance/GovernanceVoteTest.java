package opensdk.sdk.apis.governance;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.GovernanceVoteResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Governance RPC Test")
public class GovernanceVoteTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC governance_vote")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String key = "governance.governancemode";
        String value = "ballot";

        GovernanceVoteResponse response = sdk.governance.vote(key, value).send();
        response.getResult();
    }
}
