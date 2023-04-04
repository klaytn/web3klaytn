package opensdk.sdk.apis.klay.block;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetBlockTransactionCountByNumberResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayGetBlockTransactionCountByNumberExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void klayGetBlockTransactionCountByNumberExample() throws IOException {
        KlayGetBlockTransactionCountByNumberResponse gr = sdk.klay.getBlockTransactionCountByNumber(
            "0xe8")
        .send();
        gr.getResult();
    }
}
