package opensdk.sdk.apis.net;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.NetVersionResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class NetVersionExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        NetVersionResponse response = sdk.net.version().send();
        response.getResult();
    }
}
