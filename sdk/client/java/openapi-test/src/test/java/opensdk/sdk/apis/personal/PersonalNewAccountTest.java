package opensdk.sdk.apis.personal;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.PersonalNewAccountResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

@DisplayName("Personal RPC Test")
public class PersonalNewAccountTest {

    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));

    @Test
    @DisplayName("RPC personal_newAccount")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        PersonalNewAccountResponse response = w3.personalNewAccount("helloWorld").send();
        assertNotNull(response);
        assertNull(response.getError());
    }
}
