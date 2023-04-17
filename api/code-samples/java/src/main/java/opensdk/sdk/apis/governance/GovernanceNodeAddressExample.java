package opensdk.sdk.apis.governance;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.GovernanceNodeAddressResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class GovernanceNodeAddressExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        GovernanceNodeAddressResponse response = sdk.governance.nodeAddress().send();
        response.getResult();
    }
}
