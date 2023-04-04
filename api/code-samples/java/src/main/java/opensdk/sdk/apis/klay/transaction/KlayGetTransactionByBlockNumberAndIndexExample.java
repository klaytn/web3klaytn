package opensdk.sdk.apis.klay.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetTransactionByBlockNumberAndIndexResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayGetTransactionByBlockNumberAndIndexExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    void klayGetTransactionByBlockNumberAndIndexExample() throws IOException {
        KlayGetTransactionByBlockNumberAndIndexResponse response = sdk.klay.getTransactionByBlockNumberAndIndex(
                "0x451cafae98d61b7458b5cef54402830941432278184453e3ca490eb687317e68",
                "0x0"
        ).send();
        response.getResult();
    }
}
