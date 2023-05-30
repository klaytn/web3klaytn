package opensdk.sdk.apis.klay.block;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayGetBlockWithConsensusInfoByNumberRangeResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

@DisplayName("Klay RPC Test")
public class KlayGetBlockWithConsensusInfoByNumberRangeTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    @Test
    @DisplayName("RPC klay_getBlockWithConsensusInfoByNumberRange")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        Integer blockNumber = 1;
        Integer numberRange = 1;

        KlayGetBlockWithConsensusInfoByNumberRangeResponse response = w3.klayGetBlockWithConsensusInfoByNumberRange(blockNumber , numberRange).send();

        assertNotNull(response);
        assertNull(response.getError());
    }
}
