package opensdk.sdk.apis.eth.filter;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthNewBlockFilterResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class EthNewBlockFilterExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);
    void ethNewBlockFilterExample() throws IOException {
        EthNewBlockFilterResponse response = sdk.eth.newBlockFilter().send();
        response.getResult();
    }
}
