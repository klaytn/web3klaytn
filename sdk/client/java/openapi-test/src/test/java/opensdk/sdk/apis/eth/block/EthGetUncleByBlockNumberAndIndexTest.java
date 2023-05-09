package opensdk.sdk.apis.eth.block;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthGetUncleByBlockNumberAndIndexResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;


@DisplayName("Eth RPC Test")
public class EthGetUncleByBlockNumberAndIndexTest {

  private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

  @Test
  @DisplayName("RPC eth_getUncleByBlockNumberAndIndex")
  void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
    String blockTag = "0xe8";
    String uncleIndex = "0x1";
    EthGetUncleByBlockNumberAndIndexResponse response = sdk.eth.getUncleByBlockNumberAndIndex(
        blockTag, uncleIndex).send();
    assertNotNull(response);
    assertNull(response.getError());
  }
}
