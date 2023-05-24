package org.web3j.protocol.klaytn.core.governance;

import java.io.IOException;
import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.GovernanceMyVotingPowerResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

public class GovernanceMyVotingPowerExample {
  private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
  void governanceMyVotingPowerExample() throws IOException {
    GovernanceMyVotingPowerResponse response = sdk.governance.myVotingPower().send();
    response.getResult();
  }
}
