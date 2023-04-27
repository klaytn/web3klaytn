package opensdk.sdk.apis.governance;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.GovernanceVoteResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class GovernanceVoteExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    void governanceVoteExample() throws IOException {
        String key = "governance.governancemode";
        String value = "ballot";

        GovernanceVoteResponse response = sdk.governance.vote(key, value).send();
        response.getResult();
    }
}
