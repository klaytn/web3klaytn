package opensdk.sdk.apis.klay.miscellaneous;

import opensdk.sdk.apis.constant.UrlConstants;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;
import org.web3j.protocol.klaytn.core.method.response.KlayRecoverFromMessageResponse;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Klay RPC Test")
public class KlayRecoverFromMessageTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.BAOBAB_RPC));

    @Test
    @DisplayName("RPC klay_recoverFromMessage")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String address = "0xA2a8854b1802D8Cd5De631E690817c253d6a9153";
        String message = "0xdeadbeef";
        String signature = "0x1e6338d6e4a8d688a25de78cf2a92efec9a92e52eb8425acaaee8c3957e68cdb3f91bdc483f0ed05a0da26eca3be4c566d087d90dc2ca293be23b2a9de0bcafc1c";
        String blockNumber = "latest";
        KlayRecoverFromMessageResponse response = w3.klayRecoverFromMessage(address, message, signature, blockNumber).send();

        assertNotNull(response);
        assertNull(response.getError());
        assertInstanceOf(String.class, response.getResult());
    }
}
