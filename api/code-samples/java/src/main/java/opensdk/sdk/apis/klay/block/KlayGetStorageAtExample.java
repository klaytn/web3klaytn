package opensdk.sdk.apis.klay.block;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetStorageAtResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayGetStorageAtExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void klayGetStorageAtExample() throws IOException {
        KlayGetStorageAtResponse gr = sdk.klay.getStorageAt(
            "0x295a70b2de5e3953354a6a8344e616ed314d7251",
            "0x0",
            "latest")
        .send();
        gr.getResult();
    }
}
