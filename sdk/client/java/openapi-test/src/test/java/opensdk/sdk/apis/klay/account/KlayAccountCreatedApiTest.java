package opensdk.sdk.apis.klay.account;

import opensdk.sdk.apis.BaseOpenSDK;
import opensdk.sdk.models.AccountCreated200Response;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.io.IOException;

/**
 * @author Tungnd
 * @since 27/03/2023 2:22 PM
 */
@DisplayName("Klay RPC Test")
public class KlayAccountCreatedApiTest extends BaseOpenSDK {

    @Test
    @DisplayName("RPC klay_accountCreated")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        AccountCreated200Response ar = sdk.klay.accountCreated(
            "0xa4f42d4d2a3a13874406435500950c9bf2d783db",
            "latest")
        .send();
        ar.getResult();
    }
}
