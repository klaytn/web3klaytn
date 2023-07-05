package opensdk.sdk.apis.debug.blockchainInspection;

import java.io.IOException;
import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugPreimageResponse;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.klaytn.Web3j;

import org.web3j.protocol.http.HttpService;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Debug RPC Test")
public class DebugPreImageTest {
  private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));
  @Disabled
  @Test
  @DisplayName("RPC debug_preimage")
  void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
    String sha3Hash = "0xaf953a2d01f55cfe080c0c94150a60105e8ac3d51153058a1f03dd239dd08586";

    DebugPreimageResponse response = w3.debugPreimage(sha3Hash).send();
    assertNotNull(response);
    assertNull(response.getError());
    assertTrue(response.getResult() instanceof String);
  }
}
