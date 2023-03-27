package opensdk.sdk.apis.eth.acount;

import opensdk.sdk.apis.eth.BaseEthApiTest;
import opensdk.sdk.models.Accounts200Response;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertAll;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

/**
 * @author Tungnd
 * @since 23/03/2023 10:06 AM
 */
@DisplayName("Eth RPC Test")
class EthAccountsApiEthApiTest extends BaseEthApiTest {

    @Test
    @DisplayName("RPC eth_accounts")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
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
