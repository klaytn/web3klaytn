package opensdk.sdk.apis.governance;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.GovernanceGetStakingInfoResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Governance RPC Test")
public class GovernanceGetStakingInfoTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC governance_getStakingInfo")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String blockNum = "latest";

        GovernanceGetStakingInfoResponse response = sdk.governance.getStakingInfo(blockNum).send();
        assertNotNull(response);
        assertNull(response.getError());
    }
}
