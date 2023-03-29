package opensdk.sdk.apis.klay.account;

import opensdk.sdk.models.AccountCreated200Response;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayAccountCreatedExample {

    private final OpenSDK sdk = new OpenSDK();

    void klayAccountCreatedExample() throws IOException {
        // given
        String account = "0xa4f42d4d2a3a13874406435500950c9bf2d783db";
        String blockHash = "latest";
        // when
        AccountCreated200Response response = sdk.klay.accountCreated(account, blockHash).send();
    }
}
