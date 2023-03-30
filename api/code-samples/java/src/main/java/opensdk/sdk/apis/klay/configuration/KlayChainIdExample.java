package opensdk.sdk.apis.klay.configuration;

import opensdk.sdk.models.ChainID200Response;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayChainIdExample {

    private final OpenSDK sdk = new OpenSDK();

    void klayChainIdExample() throws IOException {
        ChainID200Response response = sdk.klay.chainID().send();
    }
}
