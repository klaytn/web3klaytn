package opensdk.sdk.apis.eth.configuration;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthChainIdResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class EthChainIdExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);

    void ethChainIdExample() throws IOException {
        EthChainIdResponse br = sdk.eth.chainId().send();
        br.getResult();
    }
}
