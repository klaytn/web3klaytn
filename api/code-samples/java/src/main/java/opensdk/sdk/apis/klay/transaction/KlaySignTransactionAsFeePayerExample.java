package opensdk.sdk.apis.klay.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlaySignTransactionAsFeePayerResponse;
import opensdk.sdk.models.KlaytnTransactionTypes;
import org.klaytn.OpenSDK;

import java.io.IOException;
import java.math.BigDecimal;

public class KlaySignTransactionAsFeePayerExample   {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void klaySignTransactionAsFeePayerExample() throws IOException {
        KlaytnTransactionTypes type = new KlaytnTransactionTypes();
        String address = "0x487f2dfef230c2120b8cc55c5087b103146536ec";
        String nonce = "0x1";
        type.setTypeInt(BigDecimal.valueOf(17));
        type.setFrom(address);
        type.setTo("0x44711E89b0c23845b5B2ed9D3716BA42b8a3e075");
        type.setValue("0xf4");
        type.setGas("0x76c0");
        type.setGasPrice("0x5d21dba00");
        type.setInput("0xb3f98adc0000000000000000000000000000000000000000000000000000000000000001");
        type.setFeePayer(address);
        type.setNonce(nonce);
        KlaySignTransactionAsFeePayerResponse response = sdk.klay.signTransactionAsFeePayer(type).send();
        response.getResult();
    }
}
