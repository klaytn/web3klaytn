package opensdk.sdk.apis.eth.filter;

import opensdk.sdk.apis.constant.UrlConstants;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.core.methods.response.EthFilter;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.assertTrue;


@DisplayName("Eth RPC Test")
public class EthNewPendingTransactionFilterTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.RPC));
    @Test
    @DisplayName("RPC eth_newPendingTransactionFilter")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        EthFilter response = w3.ethNewPendingTransactionFilter().send();
        assertNotNull(response);
        assertNull(response.getError());

        assertNotNull(response.getResult());
        assertTrue(response.getResult().matches("^0x[0-9a-fA-F]+$"));
    }
}
