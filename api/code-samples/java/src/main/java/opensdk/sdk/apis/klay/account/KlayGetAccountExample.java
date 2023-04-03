package opensdk.sdk.apis.klay.account;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetAccountResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayGetAccountExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);

    void klayGetAccountExample() throws IOException {
        KlayGetAccountResponse gr = sdk.klay.getAccount(
            "0x3111a0577f322e8fb54f78d9982a26ae7ca0f722",
            "latest")
        .send();
        gr.getResult();
    }
}
