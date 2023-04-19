package opensdk.sdk.apis.governance;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.GovernanceMyVotesResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class GovernanceMyVotesExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void governanceMyVotesExample() throws IOException {
        GovernanceMyVotesResponse response = sdk.governance.myVotes().send();
        response.getResult();
    }
}
