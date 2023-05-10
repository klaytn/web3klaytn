package opensdk.sdk.apis.governance;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import java.io.IOException;
import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.GovernanceMyVotingPowerResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;
@DisplayName("Governance RPC Test")
public class GovernanceMyVotingPowerTest {
  private final OpenSDK sdk = new OpenSDK(UrlConstants.GOVERNANCE_RPC);
  @Test
  @DisplayName("RPC governance_totalVotingPower")
  void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
    GovernanceMyVotingPowerResponse resp = sdk.governance.myVotingPower().send();
    assertNotNull(resp);
    assertNull(resp.getError());
  }
}
