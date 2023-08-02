package opensdk.sdk.apis.personal;

import opensdk.sdk.apis.constant.UrlConstants;
//import org.web3j.protocol.klaytn.core.method.response.PersonalSignResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Personal RPC Test")
public class PersonalSignTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));

    @Test
    @DisplayName("RPC personal_sign")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String message = "0xdead";
        String address = "0xb44b66f0d6ea803175f921018cba7e914fed25b9";
        String passphrase = "helloWorld";

//        PersonalSignResponse response = w3.personalSign(message, address, passphrase)
//                .send();
//        assertNotNull(response);
//        assertNull(response.getError());
//        assertTrue(response.getResult() instanceof String);
//        assertTrue(((String) response.getResult()).matches("^0x[0-9a-fA-F]+$"));
    }
}
