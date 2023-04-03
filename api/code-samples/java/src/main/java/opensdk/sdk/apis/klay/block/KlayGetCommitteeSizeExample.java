package opensdk.sdk.apis.klay.block;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetCommitteeSizeResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayGetCommitteeSizeExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);

    void klayGetCommitteeSizeExample() throws IOException {
        KlayGetCommitteeSizeResponse gr = sdk.klay.getCommitteeSize(
            "0x1b4")
        .send();
        gr.getResult();
    }
}
