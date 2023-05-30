package opensdk.sdk.apis.net;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.core.methods.response.NetPeerCount;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class NetPeerCountExample {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    void netPeerCountExample() throws IOException {
        NetPeerCount response = w3.netPeerCount().send();
        response.getResult();

    }
}
