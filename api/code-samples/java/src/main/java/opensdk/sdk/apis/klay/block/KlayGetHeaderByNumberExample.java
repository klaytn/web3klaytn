package opensdk.sdk.apis.klay.block;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetHeaderByNumberResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayGetHeaderByNumberExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void klayGetHeaderByNumberExample() throws IOException {
        KlayGetHeaderByNumberResponse gr = sdk.klay.getHeaderByNumber(
            "0x1b4")
        .send();
        gr.getResult();
    }
}
