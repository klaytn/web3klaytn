package opensdk.sdk.apis.personal;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.PersonalReplaceRawKeyResponse;
import opensdk.sdk.utils.CommonUtils;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;
import java.util.concurrent.ExecutionException;

@DisplayName("Personal RPC Test")
public class PersonalReplaceRawKeyTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));

    @Test
    @DisplayName("RPC personal_replaceRawKey")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException, ExecutionException, InterruptedException {
        String key = CommonUtils.genHexString();
        String passphrase = "mypassword";
        String newPassphrase = "mynewpassword";

        w3.personalImportRawKey(key, passphrase).send();
        PersonalReplaceRawKeyResponse response = w3.personalReplaceRawKey(key, passphrase, newPassphrase).send();
        assertNotNull(response);
        assertNull(response.getError());
    }

}
