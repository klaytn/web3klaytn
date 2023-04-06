package opensdk.sdk.apis.klay.others;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetRawTransactionByHashResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayGetRawTransactionByHashExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    void klayGetRawTransactionByHashExample() throws IOException {
        String transactionHash = "0x29b6cd965c7d9a53a6f068da259dce1d3810ba79fff8eebac5d4da14754e67e6";

        KlayGetRawTransactionByHashResponse response = sdk.klay
                .getRawTransactionByHash(transactionHash)
                .send();
        response.getResult();
    }
}
