package opensdk.sdk.apis.eth.block;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetBlockByHashResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class EthGetBlockByHashExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);

    void ethGetBlockByHashExample() throws IOException {
        KlayGetBlockByHashResponse br = sdk.klay.getBlockByHash(
            "0x21509a5aa2c03e9c99e3320cc7805c601b370c6a4529b29000fd8e2360d8c659",
            true)
        .send();
        br.getResult();
    }
}
