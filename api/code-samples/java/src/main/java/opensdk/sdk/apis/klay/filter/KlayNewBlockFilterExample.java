package opensdk.sdk.apis.klay.filter;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayNewBlockFilterResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class KlayNewBlockFilterExample {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));
    void klayNewBlockFilterExample() throws IOException {
        KlayNewBlockFilterResponse response = w3.klayNewBlockFilter().send();
        response.getResult();
    }
}
