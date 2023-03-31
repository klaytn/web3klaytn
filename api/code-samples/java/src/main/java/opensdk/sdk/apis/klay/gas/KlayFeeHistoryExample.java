package opensdk.sdk.apis.klay.gas;

import opensdk.sdk.models.FeeHistory200Response;
import org.klaytn.OpenSDK;

import java.io.IOException;
import java.util.List;

public class KlayFeeHistoryExample {

    private final OpenSDK sdk = new OpenSDK();

    void klayFeeHistoryExample() throws IOException {
        FeeHistory200Response fr = sdk.klay.feeHistory(
            "0x10",
            "latest",
            List.of(0.1, 0.2, 0.3))
        .send();
        fr.getResult();
    }
}
