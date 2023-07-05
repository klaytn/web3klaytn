package opensdk.sdk.utils;
import org.web3j.protocol.klaytn.core.method.response.KlaySendTransactionResponse;
import org.web3j.protocol.klaytn.core.method.response.KlaySignTransactionResponse;
import org.web3j.protocol.klaytn.core.method.response.KlaytnTransactionTypes;

import java.io.IOException;

public class KlayUtils {
    public static KlaySendTransactionResponse sendTransactionPN() throws IOException {
        KlaytnTransactionTypes type = new KlaytnTransactionTypes();
        type.setFrom(CommonUtils.addressPN);
        type.setTo("0x8c9f4468ae04fb3d79c80f6eacf0e4e1dd21deee");
        type.setValue("0x1");
        type.setGas("0x9999");
        return CommonUtils.w3ForPN.klaySendTransaction(type).send();
    }

    public static Object getFeePayerSignature(KlaytnTransactionTypes tx) throws IOException {
        KlaySignTransactionResponse response = CommonUtils.w3ForServer.klaySignTransaction(tx).send();

        if (response.getResult() == null) {
            return null;
        }

        return response.getResult().getTx();
    }
}
