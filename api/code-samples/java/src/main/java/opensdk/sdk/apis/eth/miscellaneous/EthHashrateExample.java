package opensdk.sdk.apis.eth.miscellaneous;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthHashrateResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class EthHashrateExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    void ethHashrateExample() throws IOException {
        EthHashrateResponse response = sdk.eth.hashrate().send();
        response.getResult();
    }
    
}
