package opensdk.sdk.apis.klay.account;

import opensdk.sdk.models.GetAccountResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayGetAccountExample {

    private final OpenSDK sdk = new OpenSDK();

    void klayGetAccountExample() throws IOException {
        GetAccountResponse gr = sdk.klay.getAccount(
            "0x3111a0577f322e8fb54f78d9982a26ae7ca0f722",
            "latest")
        .send();
        gr.getResult();
    }
}
