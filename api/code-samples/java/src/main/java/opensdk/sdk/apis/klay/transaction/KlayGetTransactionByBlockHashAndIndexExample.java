package opensdk.sdk.apis.klay.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetTransactionByBlockHashAndIndexResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayGetTransactionByBlockHashAndIndexExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    void klayGetTransactionByBlockHashAndIndexExample() throws IOException {
        KlayGetTransactionByBlockHashAndIndexResponse response = sdk.klay.getTransactionByBlockHashAndIndex(
                "0x451cafae98d61b7458b5cef54402830941432278184453e3ca490eb687317e68",
                "0x0"
        ).send();
        response.getResult();
    }
}
