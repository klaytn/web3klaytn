package opensdk.sdk.apis.klay.block;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetBlockWithConsensusInfoByNumberResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayGetBlockWithConsensusInfoByNumberExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void klayGetBlockWithConsensusInfoByNumberExample() throws IOException {
        KlayGetBlockWithConsensusInfoByNumberResponse gr = sdk.klay.getBlockWithConsensusInfoByNumber(
            "0xe8")
        .send();
        gr.getResult();
    }
}
