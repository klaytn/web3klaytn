package opensdk.sdk.apis.klay.block;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayBlockNumberResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayBlockNumberExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);

    void klayBlockNumberExample() throws IOException {
        KlayBlockNumberResponse br = sdk.klay.blockNumber().send();
        br.getResult();
    }
}
