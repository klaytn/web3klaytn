package opensdk.sdk.apis.klay.block;

import opensdk.sdk.models.GetCommittee200Response;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayGetCommitteeExample {

    private final OpenSDK sdk = new OpenSDK();

    void klayGetCommitteeExample() throws IOException {
        GetCommittee200Response gr = sdk.klay.getCommittee(
            "0x1b4")
        .send();
        gr.getResult();
    }
}
