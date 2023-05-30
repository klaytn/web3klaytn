package opensdk.sdk.apis.eth.account;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.EthGetCodeResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class EthGetCodeExample {

    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.LOCAL_URL));

    void ethGetCodeExample() throws IOException {
        EthGetCodeResponse br = w3.ethGetCode(
            "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
            "0x2")
        .send();
        br.getResult();
    }
}
