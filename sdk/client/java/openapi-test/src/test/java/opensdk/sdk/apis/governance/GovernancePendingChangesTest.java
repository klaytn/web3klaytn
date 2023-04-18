package opensdk.sdk.apis.governance;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.GovernancePendingChangesResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class GovernancePendingChangesTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC governance_pendingChanges")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        GovernancePendingChangesResponse response = sdk.governance.pendingChanges().send();
        response.getResult();
    }
}
