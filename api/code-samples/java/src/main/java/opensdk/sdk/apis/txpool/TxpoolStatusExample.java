package opensdk.sdk.apis.txpool;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.TxpoolStatusResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class TxpoolStatusExample {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    void txpoolStatusExample() throws IOException {
        TxpoolStatusResponse response = w3.txpoolStatus().send();
        response.getResult();
    }
}
