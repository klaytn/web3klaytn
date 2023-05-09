package opensdk.sdk.apis.personal;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import java.io.IOException;
import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.PersonalDeriveAccountResponse;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

@DisplayName("Personal RPC Test")
public class PersonalDeriveAccountTest {
  private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);
  @Disabled
  @Test
  @DisplayName("RPC personal_deriveAccount")
  void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
    String url = "url";
    String path = "path";
    boolean pin =true;
    PersonalDeriveAccountResponse response = sdk.personal.deriveAccount(url, path, pin).send();
    assertNotNull(response);
    assertNull(response.getError());
  }
}
