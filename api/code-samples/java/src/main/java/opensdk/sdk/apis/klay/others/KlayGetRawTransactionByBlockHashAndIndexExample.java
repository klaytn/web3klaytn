package opensdk.sdk.apis.klay.others;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetRawTransactionByBlockHashAndIndexResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayGetRawTransactionByBlockHashAndIndexExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    void klayGetRawTransactionByBlockHashAndIndexExample() throws IOException {
        String blockHash = "0x29b6cd965c7d9a53a6f068da259dce1d3810ba79fff8eebac5d4da14754e67e6";
        String index = "0x20965255";
        KlayGetRawTransactionByBlockHashAndIndexResponse response = sdk.klay
                .getRawTransactionByBlockHashAndIndex( blockHash , index)
                .send();
        response.getResult();

    }
}
