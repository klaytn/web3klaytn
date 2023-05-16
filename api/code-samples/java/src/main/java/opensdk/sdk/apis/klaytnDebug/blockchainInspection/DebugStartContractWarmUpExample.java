package opensdk.sdk.apis.klaytnDebug.blockchainInspection;

import java.io.IOException;
import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugStartContractWarmUpResponse;
import org.klaytn.OpenSDK;

public class DebugStartContractWarmUpExample {
  private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
  void debugStartContractWarmUpExample() throws IOException {
    String address = "0xfD1d63a152f7A7Ef14bd157C1c73c5bC3239EA5D";

    DebugStartContractWarmUpResponse response = sdk.debug.startContractWarmUp(address).send();
    response.getResult();
  }
}
