package opensdk.sdk.apis.eth.configuration;

import java.io.IOException;
import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthProtocolVersionResponse;
import org.klaytn.OpenSDK;

public class EthProtocolVersionExample {
  private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);
  void ethProtocolVersionExample() throws IOException {
    EthProtocolVersionResponse response = sdk.eth.protocolVersion().send();
    response.getResult();
  }
}
