package opensdk.sdk.apis.klay.configuration;

import opensdk.sdk.models.KlayClientVersionResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayClientVersionExample {

    private final OpenSDK sdk = new OpenSDK();

    void klayClientVersionExample() throws IOException {
        KlayClientVersionResponse cr = sdk.klay.clientVersion().send();
        cr.getResult();
    }
}
