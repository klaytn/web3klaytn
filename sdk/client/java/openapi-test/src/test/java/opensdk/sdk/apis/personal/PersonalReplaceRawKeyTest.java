package opensdk.sdk.apis.personal;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.PersonalReplaceRawKeyResponse;
import opensdk.sdk.utils.CommonUtils;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;
import java.util.concurrent.ExecutionException;

@DisplayName("Personal RPC Test")
public class PersonalReplaceRawKeyTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC personal_replaceRawKey")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException, ExecutionException, InterruptedException {
        String key = CommonUtils.genHexString();
        String passphrase = "mypassword";
        String newPassphrase = "mynewpassword";

        sdk.personal.importRawKey(key, passphrase).send();
        PersonalReplaceRawKeyResponse response = sdk.personal.replaceRawKey(key, passphrase, newPassphrase).send();
        response.getResult();
    }

}
