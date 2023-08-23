package opensdk.sdk.apis.klay.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayGetDecodedAnchoringTransactionByHashResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Klay RPC Test")
public class KlayGetDecodedAnchoringTransactionByHashApiTest {

    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.BAOBAB_RPC));

    @Test
    @DisplayName("RPC klay_getDecodedAnchoringTransactionByHash")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayGetDecodedAnchoringTransactionByHashResponse response = w3.klayGetDecodedAnchoringTransactionByHash(
            "0x026b64e16b86633c0199f78f37a64840d3601d83e5c799f115b63024764524ca")
        .send();

        assertNotNull(response);
        assertNull(response.getError());
        assertNotNull(response.getResult());
    }
}
