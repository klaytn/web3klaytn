package opensdk.sdk.apis.klay.block;

import opensdk.sdk.models.KlayGetCommitteeResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayGetCommitteeExample {

    private final OpenSDK sdk = new OpenSDK();

    void klayGetCommitteeExample() throws IOException {
        KlayGetCommitteeResponse gr = sdk.klay.getCommittee(
            "0x1b4")
        .send();
        gr.getResult();
    }
}
