package opensdk.sdk.apis.klay.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayGetTransactionByHashResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Klay RPC Test")
public class KlayGetTransactionByHashTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.BAOBAB_RPC));

    @Test
    @DisplayName("RPC klay_getTransactionByHash")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayGetTransactionByHashResponse response = w3.klayGetTransactionByHash(
                "0x21b2919b89278ca786226f10edbaadced7381dbd73df546a4823547aaebffa58"
        ).send();

        assertNotNull(response);
        assertNull(response.getError());

        assertNotNull(response.getResult());
        assertNotNull(response.getResult().getBlockHash());
        assertTrue(response.getResult().getBlockHash().matches("^0x[a-f0-9]+"));
    }

}
