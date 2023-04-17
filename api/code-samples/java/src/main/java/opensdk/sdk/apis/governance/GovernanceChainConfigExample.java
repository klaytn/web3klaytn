package opensdk.sdk.apis.governance;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.GovernanceChainConfigResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class GovernanceChainConfigExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void governanceChainConfigExample() throws IOException {
        GovernanceChainConfigResponse response = sdk.governance.chainConfig().send();
        response.getResult();
    }
}
