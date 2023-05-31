package opensdk.sdk.apis.klay.filter;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayGetFilterLogsResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class KlayGetFilterLogsExample {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    void klayGetFilterLogsExample() throws IOException {
        String quantity = "0x16";

        KlayGetFilterLogsResponse response = w3.klayGetFilterLogs(quantity).send();
        response.getResult();
    }
}
