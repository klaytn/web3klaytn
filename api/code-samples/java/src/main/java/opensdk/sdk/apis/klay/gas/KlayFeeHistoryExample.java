package opensdk.sdk.apis.klay.gas;

import opensdk.sdk.models.FeeHistory200Response;
import org.klaytn.OpenSDK;

import java.io.IOException;
import java.util.List;

public class KlayFeeHistoryExample {

    private final OpenSDK sdk = new OpenSDK();

    void klayFeeHistoryExample() throws IOException {
        String blockCount = "0x10";
        String blockTag = "latest";
        List<Double> rewardPercentiles = List.of(0.1, 0.2, 0.3);

        FeeHistory200Response response = sdk.klay.feeHistory(blockCount, blockTag, rewardPercentiles).send();
    }
}
