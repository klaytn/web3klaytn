package opensdk.sdk.apis.personal;

import java.io.IOException;
import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.PersonalDeriveAccountResponse;
import org.klaytn.OpenSDK;

public class PersonalDeriveAccountExample {
  private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);
  void personalDeriveAccountExample() throws IOException {
    String url = "url";
    String path = "path";
    boolean pin =true;
    PersonalDeriveAccountResponse response = sdk.personal.deriveAccount(url, path, pin).send();
    response.getResult();
  }
}
