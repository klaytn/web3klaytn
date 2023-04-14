package opensdk.sdk.apis.net;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.NetListeningResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class NetListeningExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void netListeningExample() throws IOException {
        NetListeningResponse response = sdk.net.listening().send();
        response.getResult();
    }
    
}
