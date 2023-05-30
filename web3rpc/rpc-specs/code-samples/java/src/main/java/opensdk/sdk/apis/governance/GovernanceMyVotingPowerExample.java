package opensdk.sdk.apis.governance;

import java.io.IOException;
import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.GovernanceMyVotingPowerResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

public class GovernanceMyVotingPowerExample {
  private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));
  void governanceMyVotingPowerExample() throws IOException {
    GovernanceMyVotingPowerResponse response = w3.governanceMyVotingPower().send();
    response.getResult();
  }
}
