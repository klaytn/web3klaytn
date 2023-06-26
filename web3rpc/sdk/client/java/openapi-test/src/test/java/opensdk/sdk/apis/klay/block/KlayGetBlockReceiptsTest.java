package opensdk.sdk.apis.klay.block;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayGetBlockReceiptsResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;
import java.util.LinkedHashMap;

import static org.junit.jupiter.api.Assertions.*;


@DisplayName("Klay RPC Test")
public class KlayGetBlockReceiptsTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));
    @Test
    @DisplayName("RPC klay_getBlockReceipts")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String blockHash = "0xba647d41423faeebe8a7c64737d284fc2eba6f0388a3e1ebf6243db509ec1577";

        KlayGetBlockReceiptsResponse response = w3.klayGetBlockReceipts(blockHash).send();

        assertNotNull(response);
        assertNull(response.getError());

        if(response.getResult() instanceof LinkedHashMap<?,?>) {
            LinkedHashMap<?,?> result = (LinkedHashMap<?,?>)response.getResult();
            assertTrue(result.containsKey("chainId"));
        }
    }
}
