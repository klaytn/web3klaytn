package opensdk.sdk.apis.klay.others;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetRawTransactionByBlockNumberAndIndexResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayGetRawTransactionByBlockNumberAndIndexExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    void klayGetRawTransactionByBlockNumberAndIndexExample() throws IOException {
        String blogTag = "0x27";
        String index = "0x0";

        KlayGetRawTransactionByBlockNumberAndIndexResponse response = sdk.klay
                .getRawTransactionByBlockNumberAndIndex(blogTag, index)
                .send();
        response.getResult();


    }
}
