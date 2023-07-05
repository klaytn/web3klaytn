package opensdk.sdk.apis.eth.configuration;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import java.io.IOException;
import opensdk.sdk.apis.constant.UrlConstants;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.core.methods.response.EthProtocolVersion;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

@DisplayName("Eth RPC Test")
public class EthProtocolVersionTest {

  private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));

  @Disabled
  @Test
  @DisplayName("RPC eth_protocolVersion")
  void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
    EthProtocolVersion response = w3.ethProtocolVersion().send();
    assertNotNull(response);
    assertNull(response.getError());
  }

}
