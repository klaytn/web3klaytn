package opensdk.sdk.apis.personal;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.PersonalReplaceRawKeyResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;
import java.security.SecureRandom;
import java.util.concurrent.ExecutionException;

@DisplayName("Personal RPC Test")
public class PersonalReplaceRawKeyTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC personal_replaceRawKey")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException, ExecutionException, InterruptedException {
        String key = genHexString();
        String passphrase = "mypassword";
        String newPassphrase = "mynewpassword";

        sdk.personal.importRawKey(key, passphrase).send();
        PersonalReplaceRawKeyResponse response = sdk.personal.replaceRawKey(key, passphrase, newPassphrase).send();
        response.getResult();
    }

    private String genHexString() {
        SecureRandom random = new SecureRandom();
        byte[] bytes = new byte[32];
        random.nextBytes(bytes);

        StringBuilder sb = new StringBuilder();
        for (byte b : bytes) {
            sb.append(String.format("%02x", b));
        }

        return sb.toString();
    }


}
