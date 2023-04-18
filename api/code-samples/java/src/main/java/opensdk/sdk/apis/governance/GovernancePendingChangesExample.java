package opensdk.sdk.apis.governance;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.GovernancePendingChangesResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class GovernancePendingChangesExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void governancePendingChangesExample() throws IOException {
        GovernancePendingChangesResponse response = sdk.governance.pendingChanges().send();
        response.getResult();
    }
}
