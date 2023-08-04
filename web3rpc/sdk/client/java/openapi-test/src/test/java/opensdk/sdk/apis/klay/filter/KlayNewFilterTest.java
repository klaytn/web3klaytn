package opensdk.sdk.apis.klay.filter;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.FilterOptions;
import org.web3j.protocol.klaytn.core.method.response.KlayNewFilterResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Klay RPC Test")
public class KlayNewFilterTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.RPC));
    @Test
    @DisplayName("RPC klay_newFilter")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        FilterOptions opt = new FilterOptions();
        opt.setFromBlock("earliest");
        opt.setToBlock("latest");
        opt.setAddress("0x87ac99835e67168d4f9a40580f8f5c33550ba88b");
        opt.setTopics(List.of("0xd596fdad182d29130ce218f4c1590c4b5ede105bee36690727baa6592bd2bfc8"));
        KlayNewFilterResponse response = w3.klayNewFilter(opt).send();

        assertNotNull(response);
        assertNull(response.getError());

        assertNotNull(response.getResult());
        assertTrue(response.getResult().matches("^0x[a-f0-9]+"));
    }
}
