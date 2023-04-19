package opensdk.sdk.apis.governance;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.GovernanceShowTallyResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class GovernanceShowTallyExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void governanceShowTallyExample() throws IOException {
        GovernanceShowTallyResponse response = sdk.governance.showTally().send();
        response.getResult();
    }
}
