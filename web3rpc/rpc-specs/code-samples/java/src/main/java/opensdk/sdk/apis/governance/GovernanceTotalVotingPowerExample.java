package opensdk.sdk.apis.governance;

import java.io.IOException;
import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.GovernanceTotalVotingPowerResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

public class GovernanceTotalVotingPowerExample {
  private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

  void governanceTotalVotingPowerExample() throws IOException {
    GovernanceTotalVotingPowerResponse response = w3.governanceTotalVotingPower().send();
    response.getResult();
  }
}
