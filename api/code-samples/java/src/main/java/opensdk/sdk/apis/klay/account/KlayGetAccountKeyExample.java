package opensdk.sdk.apis.klay.account;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetAccountKeyResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayGetAccountKeyExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    void klayGetAccountKeyExample() throws IOException {
        String address = "0x3111a0577f322e8fb54f78d9982a26ae7ca0f722";
        String blockNumberOrHashOrTag = "latest";
        KlayGetAccountKeyResponse response = sdk.klay.getAccountKey(address, blockNumberOrHashOrTag).send();
        response.getResult();
    }
}
