package opensdk.sdk.apis.klay.block;

import opensdk.sdk.models.GetCouncil200Response;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayGetCouncilExample {

    private final OpenSDK sdk = new OpenSDK();

    void klayGetCouncilExample() throws IOException {
        GetCouncil200Response gr = sdk.klay.getCouncil(
            "0x1b4")
        .send();
        gr.getResult();
    }
}
