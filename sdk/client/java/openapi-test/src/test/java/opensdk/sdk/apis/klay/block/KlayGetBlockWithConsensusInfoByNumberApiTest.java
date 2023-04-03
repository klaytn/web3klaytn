package opensdk.sdk.apis.klay.block;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetBlockWithConsensusInfoByNumberResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Klay RPC Test")
public class KlayGetBlockWithConsensusInfoByNumberApiTest {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    @Test
    @DisplayName("RPC klay_getBlockWithConsensusInfoByNumber")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayGetBlockWithConsensusInfoByNumberResponse gr = sdk.klay.getBlockWithConsensusInfoByNumber(
            "0xe8")
        .send();
        gr.getResult();
    }
}
