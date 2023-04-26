package opensdk.sdk.utils;

import opensdk.sdk.models.PersonalUnlockAccountResponse;

import java.io.IOException;

public class PersonalUtils {
    public static PersonalUnlockAccountResponse unlockAccount() throws IOException {
        Integer duration = 30;
        return CommonUtils.sdk.personal.unlockAccount(CommonUtils.address, CommonUtils.passphrase, duration).send();
    }
}
