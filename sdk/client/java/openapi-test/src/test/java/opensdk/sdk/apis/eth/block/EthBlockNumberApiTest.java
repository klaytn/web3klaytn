package opensdk.sdk.apis.eth.block;

import opensdk.sdk.apis.EthApi;
import opensdk.sdk.apis.eth.BaseEthTest;
import opensdk.sdk.apis.util.PropertyUtils;
import opensdk.sdk.models.BlockNumber200Response;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertAll;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

/**
 * @author Tungnd
 * @since 24/03/2023 9:24 AM
 */
@DisplayName("Eth RPC Test")
class EthBlockNumberApiTest extends BaseEthTest {

    @Test
    @DisplayName("RPC eth_blockNumber")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        // given
        EthApi ethApi = new EthApi(new HttpService(PropertyUtils.getRpcUrl()));
        // when
        BlockNumber200Response response = ethApi.blockNumber().send();
        // then - expect
        var resultResponse = response.getResultResponse();
        var errorResponse = response.getErrorResponse();

        assertAll(
                () -> assertNotNull(resultResponse),
                () -> assertNull(errorResponse)
        );
    }
}
