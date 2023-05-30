package opensdk.sdk.apis.klay.filter;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayNewPendingTransactionFilterResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class KlayNewPendingTransactionFilterExample {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));
    void klayNewPendingTransactionFilterExample() throws IOException {
        KlayNewPendingTransactionFilterResponse response = w3.klayNewPendingTransactionFilter().send();
        response.getResult();
    }
}
