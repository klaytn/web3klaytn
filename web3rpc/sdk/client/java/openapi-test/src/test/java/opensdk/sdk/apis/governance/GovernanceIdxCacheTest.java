package opensdk.sdk.apis.governance;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.GovernanceIdxCacheResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;
import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Governance RPC Test")
public class GovernanceIdxCacheTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.RPC));

    @Test
    @DisplayName("RPC governance_idxCache")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        GovernanceIdxCacheResponse response = w3.governanceIdxCache().send();
        assertNotNull(response);
        assertNull(response.getError());
        assertNotNull(response.getResult());
        if (response.getResult() instanceof ArrayList<?>) {
            if (!((ArrayList<?>) response.getResult()).isEmpty()) {
                assertTrue(((ArrayList<?>) response.getResult()).get(0) instanceof Integer);
            }
        }
    }
}
