package opensdk.sdk.apis.klay.gas;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayUpperBoundGasPriceResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class KlayUpperBoundGasPriceExample {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));
    void klayUpperBoundGasPriceExample() throws IOException {
        KlayUpperBoundGasPriceResponse response = w3.klayUpperBoundGasPrice().send();
        response.getResult();
    }
}
