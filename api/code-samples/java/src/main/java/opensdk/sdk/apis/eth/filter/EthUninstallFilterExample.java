package opensdk.sdk.apis.eth.filter;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthUninstallFilterResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class EthUninstallFilterExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);
    void ethUninstallFilterExample() throws IOException {
        String  filterId = "0xb";
        EthUninstallFilterResponse response = sdk.eth.uninstallFilter(filterId).send();
        response.getResult();
    }
}
