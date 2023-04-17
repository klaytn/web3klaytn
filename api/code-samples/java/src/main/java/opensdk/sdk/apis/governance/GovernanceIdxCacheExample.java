package opensdk.sdk.apis.governance;


import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.GovernanceIdxCacheResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class GovernanceIdxCacheExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        GovernanceIdxCacheResponse response = sdk.governance.idxCache().send();
        response.getResult();
    }
}
