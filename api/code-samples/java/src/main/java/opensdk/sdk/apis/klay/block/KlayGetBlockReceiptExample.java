package opensdk.sdk.apis.klay.block;


import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetBlockReceiptsResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayGetBlockReceiptExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void klayGetBlockReceiptsExample() throws IOException {
        String blockHash = "0xba647d41423faeebe8a7c64737d284fc2eba6f0388a3e1ebf6243db509ec1577";
        KlayGetBlockReceiptsResponse response = sdk.klay.getBlockReceipts(blockHash).send();
        response.getResult();
    }

}
