package opensdk.sdk.apis.eth.acount;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthAccountsResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Eth RPC Test")
class EthAccountsApiTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC eth_accounts")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        EthAccountsResponse ar = sdk.eth.accounts().send();
        ar.getResult();
    }

}
