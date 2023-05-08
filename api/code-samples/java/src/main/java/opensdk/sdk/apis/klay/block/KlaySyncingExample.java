package opensdk.sdk.apis.klay.block;

import java.io.IOException;
import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlaySyncingResponse;
import org.klaytn.OpenSDK;

public class KlaySyncingExample {
  private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
  void klaySyncingExample() throws IOException {
    KlaySyncingResponse response = sdk.klay.syncing().send();
    response.getResult();
  }
}
