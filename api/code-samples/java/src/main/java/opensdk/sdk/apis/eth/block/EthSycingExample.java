package opensdk.sdk.apis.eth.block;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthSyncingResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class EthSycingExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);
    void ethSycingExample() throws IOException {
        EthSyncingResponse response = sdk.eth.syncing().send();
        response.getResult();
    }
}
