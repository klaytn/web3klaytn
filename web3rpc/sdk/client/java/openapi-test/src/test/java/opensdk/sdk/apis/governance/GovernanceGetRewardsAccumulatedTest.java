package opensdk.sdk.apis.governance;

import opensdk.sdk.apis.constant.UrlConstants;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;
import org.web3j.protocol.klaytn.core.method.response.GovernanceGetRewardsAccumulatedResponse;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

@DisplayName("Governance RPC Test")
public class GovernanceGetRewardsAccumulatedTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.RPC));

    @Test
    @DisplayName("RPC governance_getRewardsAccumulated")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        int firstBlock = 123400489;
        int lastBlock = 123416489;
        GovernanceGetRewardsAccumulatedResponse response = w3.governanceGetRewardsAccumulated(firstBlock, lastBlock).send();
        assertNotNull(response);
        assertNull(response.getError());
        assertNotNull(response.getResult());
    }
}
