package opensdk.sdk.apis.personal;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.PersonalSignResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Personal RPC Test")
public class PersonalSignTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC personal_sign")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String message = "0xdead";
        String address = "0xb44b66f0d6ea803175f921018cba7e914fed25b9";
        String passphrase = "helloWorld";

        PersonalSignResponse response = sdk.personal.sign(message, address, passphrase)
                .send();
        assertNotNull(response);
        assertNull(response.getError());
    }
}
