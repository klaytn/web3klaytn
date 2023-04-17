package opensdk.sdk.apis.governance;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.GovernanceChainConfigResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Governance RPC Test")
public class GovernanceChainConfigTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC governance_chainConfig")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        GovernanceChainConfigResponse response = sdk.governance.chainConfig().send();
        response.getResult();
    }
}
