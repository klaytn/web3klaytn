package opensdk.sdk.apis.txpool;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.TxpoolStatusResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;
import java.util.LinkedHashMap;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Txpool RPC Test")
public class TxpoolStatusTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));

    @Test
    @DisplayName("RPC txpool_status")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        TxpoolStatusResponse response = w3.txpoolStatus().send();
        assertNotNull(response);
        assertNull(response.getError());
        assertNotNull(response.getResult());
        if (response.getResult() instanceof LinkedHashMap<?, ?>) {
            LinkedHashMap<?, ?> result = (LinkedHashMap<?, ?>) response.getResult();
            assertTrue(((LinkedHashMap<?, ?>) response.getResult()).get("pending") instanceof String);
            assertTrue(((String) result.get("pending")).matches("^0x[0-9a-fA-F]+$"));
        }
    }
}
