package opensdk.sdk.apis.personal;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.PersonalImportRawKeyResponse;
import opensdk.sdk.utils.CommonUtils;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Personal RPC Test")
public class PersonalImportRawKeyTest {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC personal_importRawKey")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String rawKey = CommonUtils.genHexString();

        PersonalImportRawKeyResponse response = sdk.personal.importRawKey(rawKey, "mypassword").send();
        assertNotNull(response);
        assertNull(response.getError());
    }
}
