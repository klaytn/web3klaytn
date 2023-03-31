package opensdk.sdk.apis.klay.account;

import opensdk.sdk.apis.BaseOpenSDK;
import opensdk.sdk.models.Accounts200Response;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.io.IOException;

@DisplayName("Klay RPC Test")
public class KlayAccountsApiTest extends BaseOpenSDK {

    @Test
    @DisplayName("RPC klay_accounts")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        Accounts200Response ar = sdk.klay.accounts().send();
        ar.getResult();
    }
}
