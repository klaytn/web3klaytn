package opensdk.sdk.apis.personal;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import java.io.IOException;
import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.PersonalDeriveAccountResponse;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

@DisplayName("Personal RPC Test")
public class PersonalDeriveAccountTest {
  private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));
  @Disabled
  @Test
  @DisplayName("RPC personal_deriveAccount")
  void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
    String url = "url";
    String path = "path";
    boolean pin =true;
    PersonalDeriveAccountResponse response = w3.personalDeriveAccount(url, path, pin).send();
    assertNotNull(response);
    assertNull(response.getError());
  }
}
