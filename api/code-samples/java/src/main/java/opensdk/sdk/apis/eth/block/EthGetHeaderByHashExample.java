package opensdk.sdk.apis.eth.block;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthGetHeaderByHashResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class EthGetHeaderByHashExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);

    void ethGetHeaderByHashExample() throws IOException {
        EthGetHeaderByHashResponse br = sdk.eth.getHeaderByHash(
            "0x21509a5aa2c03e9c99e3320cc7805c601b370c6a4529b29000fd8e2360d8c659")
        .send();
        br.getResult();
    }
}
