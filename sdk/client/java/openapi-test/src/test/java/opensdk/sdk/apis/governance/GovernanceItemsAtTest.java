package opensdk.sdk.apis.governance;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.GovernanceItemsAtResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Governance RPC Test")
public class GovernanceItemsAtTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC governance_itemsAt")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        int blockTag = 0;

        GovernanceItemsAtResponse response = sdk.governance.itemsAt(blockTag).send();
        response.getResult();
    }
}
