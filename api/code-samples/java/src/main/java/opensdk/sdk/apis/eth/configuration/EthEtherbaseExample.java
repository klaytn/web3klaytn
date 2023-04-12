package opensdk.sdk.apis.eth.configuration;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthEtherbaseResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class EthEtherbaseExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);
    void ethEtherbaseExample() throws IOException {
        EthEtherbaseResponse response = sdk.eth.etherbase().send();
        response.getResult();
    }
}
