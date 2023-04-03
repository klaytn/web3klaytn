package opensdk.sdk.apis.klay.block;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetBlockByHashResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayGetBlockByHashExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void klayGetBlockByHashExample() throws IOException {
        KlayGetBlockByHashResponse gr = sdk.klay.getBlockByHash(
            "0xba647d41423faeebe8a7c64737d284fc2eba6f0388a3e1ebf6243db509ec1577",
            true)
        .send();
        gr.getResult();
    }
}
