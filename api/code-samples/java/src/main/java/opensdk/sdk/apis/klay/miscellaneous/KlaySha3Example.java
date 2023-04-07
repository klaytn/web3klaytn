package opensdk.sdk.apis.klay.miscellaneous;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlaySha3Response;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlaySha3Example {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    void klaySha3Example() throws IOException {
        String data = "0x11223344";
        KlaySha3Response response = sdk.klay.sha3(data).send();
        response.getResult();
    }
}
