package opensdk.sdk.apis.klay.filter;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayUninstallFilterResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class KlayUninstallFilterTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.BAOBAB_RPC));
    @Test
    @DisplayName("RPC klay_uninstallFilter")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String filter = "0xd32fd16b6906e67f6e2b65dcf48fc272";

        KlayUninstallFilterResponse response = w3.klayUninstallFilter(filter).send();

        assertNotNull(response);
        assertNull(response.getError());
        assertTrue(response.getResult() instanceof Boolean);
    }
}
