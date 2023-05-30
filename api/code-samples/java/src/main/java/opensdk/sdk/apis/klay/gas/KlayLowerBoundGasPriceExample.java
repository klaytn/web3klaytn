package opensdk.sdk.apis.klay.gas;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayLowerBoundGasPriceResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class KlayLowerBoundGasPriceExample {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));
    void klayLowerBoundGasPriceExample() throws IOException {
        KlayLowerBoundGasPriceResponse response = w3.klayLowerBoundGasPrice().send();
        response.getResult();
    }
}
