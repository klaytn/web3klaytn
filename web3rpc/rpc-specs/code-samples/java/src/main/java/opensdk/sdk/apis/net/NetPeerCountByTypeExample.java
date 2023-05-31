package opensdk.sdk.apis.net;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.NetPeerCountByTypeResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class NetPeerCountByTypeExample {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        NetPeerCountByTypeResponse response = w3.netPeerCountByType().send();
        response.getResult();
    }
}
