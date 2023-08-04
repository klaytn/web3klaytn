package opensdk.sdk.apis.eth.acount;

import opensdk.sdk.apis.constant.UrlConstants;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.core.methods.response.EthAccounts;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Eth RPC Test")
class EthAccountsApiTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.RPC));

    @Test
    @DisplayName("RPC eth_accounts")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        EthAccounts ar = w3.ethAccounts().send();
        System.out.println(ar.getAccounts());
        assertNotNull(ar);
        assertNull(ar.getError());
        if (!ar.getAccounts().isEmpty()) {
            for (String address : ar.getAccounts() ) {
                assertTrue(address.matches("^0x[a-fA-F0-9]+"));
            }
        }
    }

}
