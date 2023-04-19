package opensdk.sdk.apis.governance;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.GovernanceItemCacheFromDbResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Governance RPC Test")
public class GovernanceItemCacheFromDbTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC governance_itemCacheFromDb")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        int blockNum = 0;

        GovernanceItemCacheFromDbResponse response = sdk.governance.itemCacheFromDb(blockNum).send();
        response.getResult();
    }
}
