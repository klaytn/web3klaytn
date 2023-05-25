package org.web3j.protocol.klaytn.core.eth.configuration;

import java.io.IOException;
import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.EthProtocolVersionResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

public class EthProtocolVersionExample {
  private Web3j sdk = Web3j.build(new HttpService(UrlConstants.SERVER_URL));
  void ethProtocolVersionExample() throws IOException {
    EthProtocolVersionResponse response = sdk.eth.protocolVersion().send();
    response.getResult();
  }
}
