package opensdk.sdk.apis.net;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.NetPeerCountByTypeResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class NetPeerCountByTypeExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        NetPeerCountByTypeResponse response = sdk.net.peerCountByType().send();
        response.getResult();
    }
}
