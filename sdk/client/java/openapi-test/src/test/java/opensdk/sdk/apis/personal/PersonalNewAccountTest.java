package opensdk.sdk.apis.personal;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.PersonalNewAccountResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

@DisplayName("Personal RPC Test")
public class PersonalNewAccountTest {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC personal_newAccount")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        PersonalNewAccountResponse response = sdk.personal.newAccount("helloWorld").send();
        assertNotNull(response);
        assertNull(response.getError());
    }
}
