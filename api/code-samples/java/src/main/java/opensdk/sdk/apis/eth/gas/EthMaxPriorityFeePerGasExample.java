package opensdk.sdk.apis.eth.gas;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthMaxPriorityFeePerGasResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class EthMaxPriorityFeePerGasExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);
    void ethMaxPriorityFeePerGasExample() throws IOException {
        EthMaxPriorityFeePerGasResponse response = sdk.eth.maxPriorityFeePerGas().send();
        response.getResult();
    }
}
