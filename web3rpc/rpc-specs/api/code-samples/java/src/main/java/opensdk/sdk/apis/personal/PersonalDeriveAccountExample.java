package opensdk.sdk.apis.personal;

import java.io.IOException;
import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.PersonalDeriveAccountResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

public class PersonalDeriveAccountExample {
  private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));
  void personalDeriveAccountExample() throws IOException {
    String url = "url";
    String path = "path";
    boolean pin =true;
    PersonalDeriveAccountResponse response = w3.personalDeriveAccount(url, path, pin).send();
    response.getResult();
  }
}
