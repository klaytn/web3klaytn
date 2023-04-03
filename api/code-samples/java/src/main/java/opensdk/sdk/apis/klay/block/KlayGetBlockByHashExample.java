package opensdk.sdk.apis.klay.block;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetBlockByHashResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayGetBlockByHashExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);

    void klayGetBlockByHashExample() throws IOException {
        KlayGetBlockByHashResponse gr = sdk.klay.getBlockByHash(
            "0xb8deae63002d2b6aa33247c8ef545383ee0fd2282ac9b49dbbb74114389ddb5c",
            true)
        .send();
        gr.getResult();
    }
}
