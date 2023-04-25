package opensdk.sdk.utils;

import opensdk.sdk.models.PersonalUnlockAccountResponse;

import java.io.IOException;

public class PersonalUtils extends CommonUtils{
    public static PersonalUnlockAccountResponse unlockAccount() throws IOException {
        Integer duration = 30;
        PersonalUnlockAccountResponse response = sdk.personal.unlockAccount(address,passphrase,duration).send();
        return response;
    }
}
