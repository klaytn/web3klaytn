package opensdk.sdk.apis.eth.block;

import opensdk.sdk.models.EthBlockNumberResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class EthBlockNumberExample {

    private final OpenSDK sdk = new OpenSDK();

    void ethBlockNumberExample() throws IOException {
        EthBlockNumberResponse br = sdk.eth.blockNumber().send();
        br.getResult();
    }
}
