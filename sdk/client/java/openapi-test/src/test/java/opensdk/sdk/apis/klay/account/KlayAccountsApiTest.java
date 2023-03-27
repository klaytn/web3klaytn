package opensdk.sdk.apis.klay.account;

import opensdk.sdk.apis.klay.BaseKlayApiTest;
import opensdk.sdk.models.AccountCreated200Response;
import opensdk.sdk.models.Accounts200Response;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertAll;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

/**
 * @author Tungnd
 * @since 27/03/2023 2:35 PM
 */
@DisplayName("Klay RPC Test")
public class KlayAccountsApiTest extends BaseKlayApiTest {

    @Test
    @DisplayName("RPC klay_accounts")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        // when
        Accounts200Response response = klayApi.accounts().send();
        // then - expect
        var resultResponse = response.getResultResponse();
        var errorResponse = response.getErrorResponse();

        assertAll(
                () -> assertNotNull(resultResponse),
                () -> assertNull(errorResponse)
        );
    }
}
