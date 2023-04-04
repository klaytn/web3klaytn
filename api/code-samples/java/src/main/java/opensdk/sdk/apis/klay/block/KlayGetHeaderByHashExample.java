package opensdk.sdk.apis.klay.block;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetHeaderByHashResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayGetHeaderByHashExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void klayGetHeaderByHashExample() throws IOException {
        KlayGetHeaderByHashResponse gr = sdk.klay.getHeaderByHash(
            "0xba647d41423faeebe8a7c64737d284fc2eba6f0388a3e1ebf6243db509ec1577")
        .send();
        gr.getResult();
    }
}
