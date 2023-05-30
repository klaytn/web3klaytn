package opensdk.sdk.apis.klay.block;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayGetCouncilResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class KlayGetCouncilExample {

    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    void klayGetCouncilExample() throws IOException {
        KlayGetCouncilResponse gr = w3.klayGetCouncil(
            "0x1b4")
        .send();
        gr.getResult();
    }
}
