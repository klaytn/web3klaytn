package opensdk.sdk.apis.eth.account;

import opensdk.sdk.models.EthAccountsResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class EthAccountsExample {

    private final OpenSDK sdk = new OpenSDK();

    void ethAccountsExample() throws IOException {
        EthAccountsResponse ar = sdk.eth.accounts().send();
        ar.getResult();
    }
}
