package opensdk.sdk.apis.eth.account;

import opensdk.sdk.models.Accounts200Response;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class EthAccountsExample {

    private final OpenSDK sdk = new OpenSDK();

    void ethAccountsApiTest() throws IOException {
        // when
        Accounts200Response response = sdk.eth.accounts().send();
    }
}
