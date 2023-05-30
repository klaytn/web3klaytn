package opensdk.sdk.apis.eth.configuration;

import java.io.IOException;
import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.core.methods.response.EthProtocolVersion;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

public class EthProtocolVersionExample {
  private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));
  void ethProtocolVersionExample() throws IOException {
    EthProtocolVersion response = w3.ethProtocolVersion().send();
    response.getResult();
  }
}
