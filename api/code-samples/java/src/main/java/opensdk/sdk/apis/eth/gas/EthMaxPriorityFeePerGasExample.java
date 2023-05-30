package opensdk.sdk.apis.eth.gas;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.core.methods.response.EthMaxPriorityFeePerGas;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class EthMaxPriorityFeePerGasExample {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.LOCAL_URL));
    void ethMaxPriorityFeePerGasExample() throws IOException {
        EthMaxPriorityFeePerGas response = w3.ethMaxPriorityFeePerGas().send();
        response.getResult();
    }
}
