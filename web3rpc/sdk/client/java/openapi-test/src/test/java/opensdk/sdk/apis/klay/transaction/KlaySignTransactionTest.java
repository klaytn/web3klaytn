package opensdk.sdk.apis.klay.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlaySignTransactionResponse;
import org.web3j.protocol.klaytn.core.method.response.KlaytnTransactionTypes;
import opensdk.sdk.utils.CommonUtils;
import opensdk.sdk.utils.EthUtils;
import opensdk.sdk.utils.PersonalUtils;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;
import java.util.concurrent.ExecutionException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

@DisplayName("Klay RPC Test")
public class KlaySignTransactionTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));

    @Test
    @DisplayName("RPC klay_signTransaction")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException, ExecutionException, InterruptedException {
        PersonalUtils.unlockAccount();
        String nonce = EthUtils.getNonce().getResult();
        String address = CommonUtils.address;
        KlaytnTransactionTypes type = new KlaytnTransactionTypes();
        type.setFrom(address);
        type.setTo("0x8c9f4468ae04fb3d79c80f6eacf0e4e1dd21deee");
        type.setValue("0x10000");
        type.setGas("0x1000000");
        type.setGasPrice("0x25000000000");
        type.setNonce(nonce);

        KlaySignTransactionResponse response = w3.klaySignTransaction(type).send();

        assertNotNull(response);
        assertNull(response.getError());
        assertNotNull(response.getResult());
        assertNotNull(response.getResult().getRaw());
        assertTrue(response.getResult().getRaw().matches("^0x[a-fA-F0-9]+"));
    }
}
