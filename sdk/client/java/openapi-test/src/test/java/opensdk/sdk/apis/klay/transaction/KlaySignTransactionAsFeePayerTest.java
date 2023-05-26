package opensdk.sdk.apis.klay.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlaySignTransactionAsFeePayerResponse;
import org.web3j.protocol.klaytn.core.method.response.KlaytnTransactionTypes;
import opensdk.sdk.utils.CommonUtils;
import opensdk.sdk.utils.EthUtils;
import opensdk.sdk.utils.PersonalUtils;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.concurrent.ExecutionException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

@DisplayName("Klay RPC Test")
public class KlaySignTransactionAsFeePayerTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));
    @Test
    @DisplayName("RPC klay_signTransactionAsFeePayer")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException, ExecutionException, InterruptedException {

        String address = CommonUtils.address;
        PersonalUtils.unlockAccount();
        String nonce = EthUtils.getNonce().getResult();
        KlaytnTransactionTypes type = new KlaytnTransactionTypes();
        type.setTypeInt(new BigDecimal(17));
        type.setFrom(address);
        type.setTo("0x44711E89b0c23845b5B2ed9D3716BA42b8a3e075");
        type.setValue("0xf4");
        type.setGas("0x76c0");
        type.setGasPrice("0x5d21dba00");
        type.setInput("0xb3f98adc0000000000000000000000000000000000000000000000000000000000000001");
        type.setFeePayer(address);
        type.setNonce(nonce);
        KlaySignTransactionAsFeePayerResponse tr = w3.klaySignTransactionAsFeePayer(type).send();
        assertNotNull(tr);
        assertNull(tr.getError());

    }

}
