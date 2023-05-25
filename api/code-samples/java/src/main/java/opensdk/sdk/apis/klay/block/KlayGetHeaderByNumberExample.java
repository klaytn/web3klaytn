package opensdk.sdk.apis.klay.block;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayGetHeaderByNumberResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class KlayGetHeaderByNumberExample {

    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    void klayGetHeaderByNumberExample() throws IOException {
        KlayGetHeaderByNumberResponse gr = w3.klayGetHeaderByNumber(
            "0x1b4")
        .send();
        gr.getResult();
    }
}
