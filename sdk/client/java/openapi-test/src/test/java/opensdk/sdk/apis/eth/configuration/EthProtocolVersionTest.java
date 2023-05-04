package opensdk.sdk.apis.eth.configuration;

import java.io.IOException;
import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthProtocolVersionResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

@DisplayName("Eth RPC Test")
public class EthProtocolVersionTest {

  private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);
  @Test
  @DisplayName("RPC eth_protocolVersion")
  void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
    EthProtocolVersionResponse response = sdk.eth.protocolVersion().send();
    response.getResult();
  }

}
