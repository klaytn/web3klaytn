package opensdk.sdk.apis.governance;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.GovernanceGetStakingInfoResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class GovernanceGetStakingInfoExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void governanceGetStakingInfoExample() throws IOException {
        String blockNum = "latest";

        GovernanceGetStakingInfoResponse response = sdk.governance.getStakingInfo(blockNum).send();
        response.getResult();
    }
}
