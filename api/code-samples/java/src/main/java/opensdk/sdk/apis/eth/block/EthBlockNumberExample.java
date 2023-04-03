package opensdk.sdk.apis.eth.block;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthBlockNumberResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class EthBlockNumberExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);

    void ethBlockNumberExample() throws IOException {
        EthBlockNumberResponse br = sdk.eth.blockNumber().send();
        br.getResult();
    }
}
