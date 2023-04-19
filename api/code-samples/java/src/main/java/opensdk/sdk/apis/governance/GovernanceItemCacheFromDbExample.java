package opensdk.sdk.apis.governance;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.GovernanceItemCacheFromDbResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class GovernanceItemCacheFromDbExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void governanceItemCacheFromDbExample() throws IOException {
        int blockNum = 0;

        GovernanceItemCacheFromDbResponse response = sdk.governance.itemCacheFromDb(blockNum).send();
        response.getResult();
    }
}
