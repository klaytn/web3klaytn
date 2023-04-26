package opensdk.sdk.apis.eth.account;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthSignResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;
import java.util.concurrent.ExecutionException;

public class EthSignExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    void ethSignExample() throws IOException, ExecutionException, InterruptedException {
        String address = "0x413ba0e5f6f00664598b5c80042b1308f4ff1408";
        EthSignResponse response = sdk.eth.sign(address, "0xdeadbeaf").send();
        response.getResult();

    }
    
}
