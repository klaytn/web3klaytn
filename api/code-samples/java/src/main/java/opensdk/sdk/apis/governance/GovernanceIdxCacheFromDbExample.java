package opensdk.sdk.apis.governance;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.GovernanceIdxCacheFromDbResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class GovernanceIdxCacheFromDbExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void governanceIdxCacheFromDbExample() throws IOException {
        GovernanceIdxCacheFromDbResponse response = sdk.governance.idxCacheFromDb().send();
        response.getResult();
    }
}
