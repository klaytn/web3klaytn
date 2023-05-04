package opensdk.sdk.apis.governance;

import java.io.IOException;
import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.GovernanceTotalVotingPowerResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

@DisplayName("Governance RPC Test")
public class GovernanceTotalVotingPowerTest {

  private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);
  @Test
  @DisplayName("RPC governance_totalVotingPower")
  void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
    GovernanceTotalVotingPowerResponse resp = sdk.governance.totalVotingPower().send();
    resp.getResult();
  }

}
