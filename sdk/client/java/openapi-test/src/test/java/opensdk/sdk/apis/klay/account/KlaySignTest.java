package opensdk.sdk.apis.klay.account;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlaySignResponse;
import opensdk.sdk.utils.PersonalUtils;
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
        String address = "0x487f2dfef230c2120b8cc55c5087b103146536ec";
        String message = "0xdeadbeaf";
        PersonalUtils.unlockAccount();
        KlaySignResponse signResponse = sdk.klay.sign(address, message).send();
        assertNotNull(signResponse.getResult());
    }
}
