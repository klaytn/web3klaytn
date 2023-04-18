package opensdk.sdk.apis.governance;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.GovernanceVotesResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class GovernanceVotesExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void governanceVotesExample() throws IOException {
        GovernanceVotesResponse response = sdk.governance.votes().send();
        response.getResult();
    }
}
