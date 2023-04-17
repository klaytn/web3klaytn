package opensdk.sdk.apis.governance;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.GovernanceIdxCacheResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Governance RPC Test")
public class GovernanceIdxCacheTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    @Test
    @DisplayName("RPC governance_idxCache")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        GovernanceIdxCacheResponse response = sdk.governance.idxCache().send();
        response.getResult();
    }
}
