package opensdk.sdk.apis.governance;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.GovernanceIdxCacheFromDbResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Governance RPC Test")
public class GovernanceIdxCacheFromDbTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC governance_idxCacheFromDb")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        GovernanceIdxCacheFromDbResponse response = sdk.governance.idxCacheFromDb(0).send();
        response.getResult();
    }
}
