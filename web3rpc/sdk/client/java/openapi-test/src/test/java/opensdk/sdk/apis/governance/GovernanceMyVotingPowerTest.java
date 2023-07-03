package opensdk.sdk.apis.governance;

import java.io.IOException;
import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.GovernanceMyVotingPowerResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Governance RPC Test")
public class GovernanceMyVotingPowerTest {
  private Web3j w3 = Web3j.build(new HttpService(UrlConstants.GOVERNANCE_RPC));
  @Test
  @DisplayName("RPC governance_totalVotingPower")
  void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
    GovernanceMyVotingPowerResponse resp = w3.governanceMyVotingPower().send();
    assertNotNull(resp);
    assertNull(resp.getError());
    assertTrue(resp.getResult() instanceof Integer);
  }
}
