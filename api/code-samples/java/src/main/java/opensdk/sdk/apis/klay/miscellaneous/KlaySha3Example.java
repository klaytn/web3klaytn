package opensdk.sdk.apis.klay.miscellaneous;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlaySha3Response;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class KlaySha3Example {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));
    void klaySha3Example() throws IOException {
        String data = "0x11223344";
        KlaySha3Response response = w3.klaySha3(data).send();
        response.getResult();
    }
}
