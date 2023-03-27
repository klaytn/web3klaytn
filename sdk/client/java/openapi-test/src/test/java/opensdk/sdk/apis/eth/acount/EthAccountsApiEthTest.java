package opensdk.sdk.apis.eth.acount;

import opensdk.sdk.apis.EthApi;
import opensdk.sdk.apis.eth.BaseEthTest;
import opensdk.sdk.apis.util.PropertyUtils;
import opensdk.sdk.models.Accounts200Response;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertAll;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

/**
 * @author Tungnd
 * @since 23/03/2023 10:06 AM
 */
@DisplayName("Eth RPC Test")
class EthAccountsApiEthTest extends BaseEthTest {

    @Test
    @DisplayName("RPC eth_accounts")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        // given
        EthApi ethApi = new EthApi(new HttpService(PropertyUtils.getRpcUrl()));
        // when
        Accounts200Response response = ethApi.accounts().send();
        // then - expect
        var resultResponse = response.getResultResponse();
        var errorResponse = response.getErrorResponse();

        assertAll(
                () -> assertNotNull(resultResponse),
                () -> assertNull(errorResponse)
        );
    }

}
