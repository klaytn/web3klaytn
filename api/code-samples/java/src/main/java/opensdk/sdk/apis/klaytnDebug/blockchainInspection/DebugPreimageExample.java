package opensdk.sdk.apis.klaytnDebug.blockchainInspection;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugPreimageResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class DebugPreimageExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugPreImageExample() throws IOException {
        String sha3Hash = "0xaf953a2d01f55cfe080c0c94150a60105e8ac3d51153058a1f03dd239dd08586";

        DebugPreimageResponse response = sdk.debug.preimage(sha3Hash).send();
        response.getResult();
    }
}
