package opensdk.sdk.apis.klay.block;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetCommitteeSizeResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayGetCouncilSizeExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void klayGetCouncilSizeExample() throws IOException {
        KlayGetCommitteeSizeResponse gr = sdk.klay.getCouncilSize(
            "0x1b4")
        .send();
        gr.getResult();
    }
}
