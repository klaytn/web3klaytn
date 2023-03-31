package opensdk.sdk.apis.klay.block;

import opensdk.sdk.models.GetCommitteeSize200Response;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayGetCouncilSizeExample {

    private final OpenSDK sdk = new OpenSDK();

    void klayGetCouncilSizeExample() throws IOException {
        GetCommitteeSize200Response gr = sdk.klay.getCouncilSize(
            "0x1b4")
        .send();
        gr.getResult();
    }
}
