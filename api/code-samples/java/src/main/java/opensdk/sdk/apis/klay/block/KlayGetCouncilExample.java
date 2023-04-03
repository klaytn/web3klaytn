package opensdk.sdk.apis.klay.block;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetCouncilResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayGetCouncilExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);

    void klayGetCouncilExample() throws IOException {
        KlayGetCouncilResponse gr = sdk.klay.getCouncil(
            "0x1b4")
        .send();
        gr.getResult();
    }
}
