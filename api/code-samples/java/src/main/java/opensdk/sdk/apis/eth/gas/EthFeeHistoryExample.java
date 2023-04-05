package opensdk.sdk.apis.eth.gas;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthFeeHistoryResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;
import java.util.List;

public class EthFeeHistoryExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);

    void ethFeeHistoryExample() throws IOException {
        EthFeeHistoryResponse br = sdk.eth.feeHistory(
            "0x10",
            "latest",
            List.of(0.1, 0.2, 0.3))
        .send();
        br.getResult();
    }
}
