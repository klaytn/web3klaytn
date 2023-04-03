package opensdk.sdk.apis.klay.account;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetCodeResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayGetCodeExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);

    void klayGetCodeExample() throws IOException {
        KlayGetCodeResponse gr = sdk.klay.getCode(
            "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
            "0x2")
        .send();
        gr.getResult();
    }
}
