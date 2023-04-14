package opensdk.sdk.apis.personal;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.PersonalOpenWalletResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Personal RPC Test")
public class PersonalOpenWalletTest {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC personal_openWallet")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String url = "keystore:///home/sotatek/klay-node/kcn-v1.10.2-0-linux-amd64/kcn-linux-amd64/data/keystore/UTC--2" +
                "023-04-13T03-23-36.992476555Z--8cd4b6b24f2cd0b83d49876f932254823e875547";
        String passphrase = "passphrase";
        PersonalOpenWalletResponse response = sdk.personal
                .openWallet(url, passphrase)
                .send();
        response.getResult();
    }
}
