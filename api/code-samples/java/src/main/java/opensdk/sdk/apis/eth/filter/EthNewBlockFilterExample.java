package opensdk.sdk.apis.eth.filter;

import java.io.IOException;
import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthNewBlockFilterResponse;
import org.klaytn.OpenSDK;

public class EthNewBlockFilterExample {

  private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);

  void ethNewBlockFilterExample() throws IOException {
    EthNewBlockFilterResponse br = sdk.eth.newBlockFilter().send();
    br.getResult();
  }
}
