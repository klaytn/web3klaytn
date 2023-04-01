package opensdk.sdk.apis.eth.acount;

import opensdk.sdk.apis.BaseOpenSDK;
import opensdk.sdk.models.EthAccountsResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.io.IOException;

@DisplayName("Eth RPC Test")
class EthAccountsApiEthApiTest extends BaseOpenSDK {

    @Test
    @DisplayName("RPC eth_accounts")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        EthAccountsResponse ar = sdk.eth.accounts().send();
        ar.getResult();
    }

}
