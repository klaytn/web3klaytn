package opensdk.sdk.apis.eth.filter;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.EthGetFilterLogsResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class EthGetFilterLogsExample {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));
    void ethGetFilterLogsExample() throws IOException {
        String id = "0x7e406dd358f4e13b78bab67d5715fdf1";
        EthGetFilterLogsResponse response = w3.ethGetFilterLogs(id).send();
        response.getResult();
    }
}
