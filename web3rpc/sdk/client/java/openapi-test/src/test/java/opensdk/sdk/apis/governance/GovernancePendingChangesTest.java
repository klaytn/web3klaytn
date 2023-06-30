package opensdk.sdk.apis.governance;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.GovernancePendingChangesResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;
import java.util.LinkedHashMap;

import static org.junit.jupiter.api.Assertions.*;

public class GovernancePendingChangesTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));

    @Test
    @DisplayName("RPC governance_pendingChanges")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        GovernancePendingChangesResponse response = w3.governancePendingChanges().send();
        assertNotNull(response);
        assertNull(response.getError());
        assertNotNull(response.getResult());
        if (response.getResult() instanceof LinkedHashMap<?,?>) {
            if (!((LinkedHashMap<?, ?>) response.getResult()).isEmpty()) {
                LinkedHashMap<?, ?> result = (LinkedHashMap<?, ?>) response.getResult();
                assertTrue(result.containsKey("reward.minimumstake"));
            }
        }
    }
}
