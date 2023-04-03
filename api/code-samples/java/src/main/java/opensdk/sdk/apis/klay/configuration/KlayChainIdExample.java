package opensdk.sdk.apis.klay.configuration;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayChainIDResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayChainIdExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);

    void klayChainIdExample() throws IOException {
        KlayChainIDResponse cr = sdk.klay.chainID().send();
        cr.getResult();
    }
}
