package opensdk.sdk.apis.klay.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.apis.helper.Helper;
import opensdk.sdk.models.KlaySignTransactionAsFeePayerResponse;
import opensdk.sdk.models.KlaytnTransactionTypes;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.concurrent.ExecutionException;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@DisplayName("Klay RPC Test")
public class KlaySignTransactionAsFeePayerTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);
    @Test
    @DisplayName("RPC klay_signTransactionAsFeePayer")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException, ExecutionException, InterruptedException {

        KlaySignTransactionAsFeePayerResponse tr = Helper.unlockAccount().thenApplyAsync((response) -> Helper.getNonce())
                .thenApplyAsync(res -> {
            try {
                String address = "0x487f2dfef230c2120b8cc55c5087b103146536ec";
                String nonce = res.get().getResult();
                KlaytnTransactionTypes type = new KlaytnTransactionTypes();
                type.setTypeInt(BigDecimal.valueOf(17));
                type.setFrom(address);
                type.setTo("0x44711E89b0c23845b5B2ed9D3716BA42b8a3e075");
                type.setValue("0xf4");
                type.setGas("0x76c0");
                type.setGasPrice("0x5d21dba00");
                type.setInput("0xb3f98adc0000000000000000000000000000000000000000000000000000000000000001");
                type.setFeePayer(address);
                type.setNonce(nonce);
                return sdk.klay.signTransactionAsFeePayer(type).send();
            } catch (InterruptedException | ExecutionException | IOException e) {
                throw new RuntimeException(e);
            }
        }).get();
        assertNotNull(tr.getResult());

    }

}