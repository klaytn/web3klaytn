package opensdk.sdk.apis.eth.account;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.core.DefaultBlockParameter;
import org.web3j.protocol.core.methods.response.EthGetCode;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;
import java.math.BigInteger;

public class EthGetCodeExample {

    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.LOCAL_URL));

    void ethGetCodeExample() throws IOException {
        EthGetCode br = w3.ethGetCode(
            "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
                DefaultBlockParameter.valueOf(BigInteger.valueOf(2)))
        .send();
        br.getResult();
    }
}
