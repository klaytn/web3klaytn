package opensdk.sdk.apis.klay.block;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetBlockByNumberResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayGetBlockByNumberExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void klayGetBlockByNumberExample() throws IOException {
        KlayGetBlockByNumberResponse gr = sdk.klay.getBlockByNumber(
            "0x1b4",
            true)
        .send();
        gr.getResult();
    }
}
