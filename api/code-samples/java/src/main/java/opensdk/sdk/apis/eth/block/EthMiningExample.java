package opensdk.sdk.apis.eth.block;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthMiningResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class EthMiningExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);
    void ethMiningExample() throws IOException {
        EthMiningResponse response = sdk.eth.mining().send();
        response.getResult();
    }
}
