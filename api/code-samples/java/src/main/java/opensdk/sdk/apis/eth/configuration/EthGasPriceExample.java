package opensdk.sdk.apis.eth.configuration;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthGasPriceResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class EthGasPriceExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);

    void ethGasPriceExample() throws IOException {
        EthGasPriceResponse br = sdk.eth.gasPrice().send();
        br.getResult();
    }
}
