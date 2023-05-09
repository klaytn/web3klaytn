package opensdk.sdk.apis.klay.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlaySignTransactionResponse;
import opensdk.sdk.models.KlaytnTransactionTypes;
import opensdk.sdk.utils.EthUtils;
import opensdk.sdk.utils.PersonalUtils;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;
import java.util.concurrent.ExecutionException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

@DisplayName("Klay RPC Test")
public class KlaySignTransactionTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC klay_signTransaction")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException, ExecutionException, InterruptedException {
        PersonalUtils.unlockAccount();
        String nonce = EthUtils.getNonce().getResult();
        String address = "0x487f2dfef230c2120b8cc55c5087b103146536ec";
        KlaytnTransactionTypes type = new KlaytnTransactionTypes();
        type.setFrom(address);
        type.setTo("0x8c9f4468ae04fb3d79c80f6eacf0e4e1dd21deee");
        type.setValue("0x10000");
        type.setGas("0x1000000");
        type.setGasPrice("0x25000000000");
        type.setNonce(nonce);

        KlaySignTransactionResponse response = sdk.klay.signTransaction(type).send();

        assertNotNull(response);
        assertNull(response.getError());
    }
}
