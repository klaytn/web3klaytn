package opensdk.sdk.apis.klay.account;


import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetAccountKeyResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNull;

public class KlayGetAccountKeyTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC klay_getAccountKey")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String address = "0x3111a0577f322e8fb54f78d9982a26ae7ca0f722";
        String blockNumberOrHashOrTag = "latest";

        KlayGetAccountKeyResponse response = sdk.klay.getAccountKey(address, blockNumberOrHashOrTag).send();

        assertNull(response.getResult());
    }
}
