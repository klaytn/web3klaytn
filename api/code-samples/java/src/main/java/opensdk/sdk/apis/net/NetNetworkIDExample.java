package opensdk.sdk.apis.net;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.NetNetworkIDResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class NetNetworkIDExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        NetNetworkIDResponse response = sdk.net.networkID().send();
        response.getResult();
    }
}
