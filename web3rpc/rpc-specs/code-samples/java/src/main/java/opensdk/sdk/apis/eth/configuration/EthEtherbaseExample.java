package opensdk.sdk.apis.eth.configuration;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.EthEtherbaseResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class EthEtherbaseExample {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.LOCAL_URL));
    void ethEtherbaseExample() throws IOException {
        EthEtherbaseResponse response = w3.ethEtherbase().send();
        response.getResult();
    }
}
