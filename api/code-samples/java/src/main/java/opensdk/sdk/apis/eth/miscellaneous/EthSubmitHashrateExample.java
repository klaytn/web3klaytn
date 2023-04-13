package opensdk.sdk.apis.eth.miscellaneous;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthSubmitHashrateResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class EthSubmitHashrateExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void ethSubmitHashrateExample() throws IOException {
        String hashRate ="0x5";
        String id  = "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef";
        EthSubmitHashrateResponse response = sdk.eth.submitHashrate(hashRate , id).send();
        response.getResult();
    }
    
}
