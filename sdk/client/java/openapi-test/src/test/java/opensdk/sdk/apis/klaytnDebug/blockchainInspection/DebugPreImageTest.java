package opensdk.sdk.apis.klaytnDebug.blockchainInspection;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import java.io.IOException;
import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugPreimageResponse;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

@DisplayName("Debug RPC Test")
public class DebugPreImageTest {
  private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);
  @Disabled
  @Test
  @DisplayName("RPC debug_preimage")
  void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
    String sha3Hash = "0xaf953a2d01f55cfe080c0c94150a60105e8ac3d51153058a1f03dd239dd08586";

    DebugPreimageResponse response = sdk.debug.preimage(sha3Hash).send();
    assertNotNull(response);
    assertNull(response.getError());
  }
}
