package opensdk.sdk.apis.governance;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.GovernanceItemsAtResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class GovernanceItemsAtExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void governanceItemsAtExample() throws IOException {
        int blockTag = 0;

        GovernanceItemsAtResponse response = sdk.governance.itemsAt(blockTag).send();
        response.getResult();
    }
}
