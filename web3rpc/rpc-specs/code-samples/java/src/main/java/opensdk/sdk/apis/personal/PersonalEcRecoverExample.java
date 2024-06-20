import org.web3j.protocol.klaytn.core.method.response.PersonalEcRecoverResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class PersonalEcRecoverExample {

    private Web3j w3 = Web3j.build(new HttpService("https://public-en-baobab.klaytn.net"));
    void personalEcRecoverExample() throws IOException {
        PersonalEcRecoverResponse response = w3.personalEcRecover(
                "0xdead",
                        "0xccb8cce176b01fdc8f7ac3c101b8eb3b9005e938a60800e517624419dd8b7fba0e4598bdf1c4fa1743e1288e89b8b7090cc11f4b3640aafcbc71896ec73eec241b")
                .send();
        response.getResult();
    }
}
