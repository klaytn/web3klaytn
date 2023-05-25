package org.web3j.protocol.klaytn.core.klay.block;

import java.io.IOException;
import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlaySyncingResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

public class KlaySyncingExample {
  private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
  void klaySyncingExample() throws IOException {
    KlaySyncingResponse response = sdk.klay.syncing().send();
    response.getResult();
  }
}
