package opensdk.sdk.apis.eth.configuration;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthCoinbaseResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class EthCoinbaseExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);

    void ethCoinbaseExample() throws IOException {
        EthCoinbaseResponse br = sdk.eth.coinbase().send();
        br.getResult();
    }
}
