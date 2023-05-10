package opensdk.sdk.apis.governance;

import java.io.IOException;
import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.GovernanceMyVotingPowerResponse;
import org.klaytn.OpenSDK;

public class GovernanceMyVotingPowerExample {
  private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
  void governanceMyVotingPowerExample() throws IOException {
    GovernanceMyVotingPowerResponse response = sdk.governance.myVotingPower().send();
    response.getResult();
  }
}
