package opensdk.sdk.utils;
import org.web3j.protocol.klaytn.core.method.response.PersonalUnlockAccountResponse;

import java.io.IOException;

public class PersonalUtils {
    public static PersonalUnlockAccountResponse unlockAccount() throws IOException {
        Integer duration = 300;
        return CommonUtils.w3ForServer.personalUnlockAccount(CommonUtils.address, CommonUtils.passphrase, duration).send();
    }

    public static PersonalUnlockAccountResponse unlockAccountPn() throws IOException {
        Integer duration = 30;
        return CommonUtils.w3ForPN.personalUnlockAccount(
            CommonUtils.addressPN, CommonUtils.passphrasePN, duration).send();
    }
}
