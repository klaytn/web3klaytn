package opensdk.sdk.apis.net;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.NetPeerCountResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class NetPeerCountExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void netPeerCountExample() throws IOException {
        NetPeerCountResponse response = sdk.net.peerCount().send();
        response.getResult();

    }
}
