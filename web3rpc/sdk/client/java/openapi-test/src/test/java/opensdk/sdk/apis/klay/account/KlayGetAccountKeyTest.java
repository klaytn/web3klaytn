package opensdk.sdk.apis.klay.account;


import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayGetAccountKeyResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

public class KlayGetAccountKeyTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    @Test
    @DisplayName("RPC klay_getAccountKey")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String address = "0xa36a5fdc679ecaabe057556ccec2f3558068bdc8";
        String blockNumberOrHashOrTag = "latest";

        KlayGetAccountKeyResponse response = w3.klayGetAccountKey(address, blockNumberOrHashOrTag).send();

        assertNotNull(response);
        assertNull(response.getError());

        assertNotNull(response.getResult());
        assertInstanceOf(Integer.class, response.getResult().getKeyType());
    }
}
