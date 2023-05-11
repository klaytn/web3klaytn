package opensdk.sdk.apis.governance;

import java.io.IOException;
import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.GovernanceTotalVotingPowerResponse;
import org.klaytn.OpenSDK;

public class GovernanceTotalVotingPowerExample {
  private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

  void governanceTotalVotingPowerExample() throws IOException {
    GovernanceTotalVotingPowerResponse response = sdk.governance.totalVotingPower().send();
    response.getResult();
  }
}
