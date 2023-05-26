package org.web3j.protocol.klaytn.core.governance;

import java.io.IOException;
import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.GovernanceTotalVotingPowerResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

public class GovernanceTotalVotingPowerExample {
  private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

  void governanceTotalVotingPowerExample() throws IOException {
    GovernanceTotalVotingPowerResponse response = sdk.governance.totalVotingPower().send();
    response.getResult();
  }
}
