package opensdk.sdk.apis.klay.account;

import opensdk.sdk.models.Accounts200Response;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayAccountsExample {

    private final OpenSDK sdk = new OpenSDK();

    void klayAccountsExample() throws IOException {
        Accounts200Response ar = sdk.klay.accounts().send();
        ar.getResult();
    }
}
