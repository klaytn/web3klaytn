package opensdk.sdk.apis.klay.block;

import opensdk.sdk.models.KlayGetBlockWithConsensusInfoByNumberRangeResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayGetBlockWithConsensusInfoByNumberRangeExample {
    private final OpenSDK sdk = new OpenSDK("https://api.baobab.klaytn.net:8651");
    void klayGetBlockWithConsensusInfoByNumberRangeExample() throws IOException {
        Integer blockNumber = 1;
        Integer numberRange = 1;
        KlayGetBlockWithConsensusInfoByNumberRangeResponse response = sdk.klay
                .getBlockWithConsensusInfoByNumberRange(blockNumber , numberRange).send();
        response.getResult();
    }
}
