package opensdk.sdk.apis.eth.block;

import opensdk.sdk.models.BlockNumber200Response;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class EthBlockNumberExample {

    private final OpenSDK sdk = new OpenSDK();
    void ethBlockNumberApiTest() throws IOException {
        // when
        BlockNumber200Response response = sdk.eth.blockNumber().send();

    }
}
