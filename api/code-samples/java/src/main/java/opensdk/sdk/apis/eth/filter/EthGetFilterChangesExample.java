package opensdk.sdk.apis.eth.filter;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthGetFilterChangesResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class EthGetFilterChangesExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    void ethGetFilterChangesExample() throws IOException {
        String id = "0xa07ed87eda2a0a388a1a9b3e372128ec";
        EthGetFilterChangesResponse response = sdk.eth.getFilterChanges(id).send();
        response.getResult();
    }
}