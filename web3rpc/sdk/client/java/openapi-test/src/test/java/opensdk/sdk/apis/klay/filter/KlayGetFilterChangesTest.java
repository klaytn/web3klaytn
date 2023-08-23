package opensdk.sdk.apis.klay.filter;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.utils.EthUtils;
import org.web3j.protocol.klaytn.core.method.response.KlayGetFilterChangesResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

@DisplayName("Klay RPC Test")
public class KlayGetFilterChangesTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.PN_RPC));

    @Test
    @DisplayName("RPC klay_getFilterChange")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String quantity = EthUtils.getEthFilter().getResult();
        KlayGetFilterChangesResponse response = w3.klayGetFilterChanges(quantity).send();

        assertNotNull(response);
        assertNull(response.getError());
        assertNotNull(response.getResult());
    }
}
