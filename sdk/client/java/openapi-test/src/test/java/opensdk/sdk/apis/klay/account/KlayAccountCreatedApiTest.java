package opensdk.sdk.apis.klay.account;

import opensdk.sdk.apis.BaseOpenSDK;
import opensdk.sdk.models.AccountCreated200Response;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertAll;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

/**
 * @author Tungnd
 * @since 27/03/2023 2:22 PM
 */
@DisplayName("Klay RPC Test")
public class KlayAccountCreatedApiTest extends BaseOpenSDK {

    @Test
    @DisplayName("RPC klay_accountCreated")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        // given
        String account = "0xa4f42d4d2a3a13874406435500950c9bf2d783db";
        String blockHash = "latest";
        // when
        AccountCreated200Response response = sdk.klay.accountCreated(account, blockHash).send();
        // then - expect
        var resultResponse = response.getResultResponse();
        var errorResponse = response.getErrorResponse();

        assertAll(
                () -> assertNotNull(resultResponse),
                () -> assertNull(errorResponse)
        );
    }
}
