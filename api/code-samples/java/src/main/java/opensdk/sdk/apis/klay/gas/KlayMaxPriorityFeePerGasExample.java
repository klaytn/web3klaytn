package opensdk.sdk.apis.klay.gas;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayMaxPriorityFeePerGasResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayMaxPriorityFeePerGasExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayMaxPriorityFeePerGasResponse response = sdk.klay.maxPriorityFeePerGas().send();
        response.getResult();
    }
}
