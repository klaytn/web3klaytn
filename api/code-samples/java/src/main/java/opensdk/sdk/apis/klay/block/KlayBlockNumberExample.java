package opensdk.sdk.apis.klay.block;

import opensdk.sdk.models.BlockNumber200Response;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayBlockNumberExample {

    private final OpenSDK sdk = new OpenSDK();

    void klayBlockNumberExample() throws IOException {
        // when
        BlockNumber200Response response = sdk.klay.blockNumber().send();
    }
}
