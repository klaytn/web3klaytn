package opensdk.sdk.apis.klay.account;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.apis.helper.Helper;
import opensdk.sdk.models.KlaySignResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;
import java.util.concurrent.ExecutionException;

import static org.junit.jupiter.api.Assertions.assertNotNull;


@DisplayName("Klay RPC Test")
public class KlaySignTest {
    private static final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);
    @Test
    @DisplayName("RPC klay_sign")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException, ExecutionException, InterruptedException {
        KlaySignResponse signResponse = Helper.unlockAccount().thenApplyAsync(res -> {
            try {
                String address = "0x487f2dfef230c2120b8cc55c5087b103146536ec";
                String message = "0xdeadbeaf";
                KlaySignResponse response = sdk.klay.sign(address, message).send();
                return response;
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }).get();
        assertNotNull(signResponse.getResult());

    }
}
