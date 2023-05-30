package opensdk.sdk.apis.klay.gas;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayMaxPriorityFeePerGasResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class KlayMaxPriorityFeePerGasExample {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.LOCAL_URL));
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayMaxPriorityFeePerGasResponse response = w3.klayMaxPriorityFeePerGas().send();
        response.getResult();
    }
}
