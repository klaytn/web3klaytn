package opensdk.sdk.apis.klay.configuration;

import opensdk.sdk.models.ClientVersion200Response;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayClientVersionExample {

    private final OpenSDK sdk = new OpenSDK();

    void klayClientVersionExample() throws IOException {
        ClientVersion200Response response = sdk.klay.clientVersion().send();
    }
}
