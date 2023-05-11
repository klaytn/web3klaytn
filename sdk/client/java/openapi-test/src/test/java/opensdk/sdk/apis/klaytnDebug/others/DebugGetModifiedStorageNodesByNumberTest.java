package opensdk.sdk.apis.klaytnDebug.others;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import java.io.IOException;
import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugGetModifiedStorageNodesByNumberResponse;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;
@DisplayName("Debug RPC Test")
public class DebugGetModifiedStorageNodesByNumberTest {
  private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);
  @Disabled
  @Test
  @DisplayName("RPC debug_storageRangeAt")
  void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
    String address = "0x73a7d19d14f7dfac5b799e405e22133b2adc57a6";
    Integer startBlockNum = 100;
    Integer endBlockNum = 200;
    DebugGetModifiedStorageNodesByNumberResponse response = sdk.debug.getModifiedStorageNodesByNumber(
        address, startBlockNum, endBlockNum).send();
    assertNotNull(response);
    assertNull(response.getError());
  }
}
