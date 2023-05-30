package opensdk.sdk.apis.eth.filter;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;
import org.web3j.protocol.core.DefaultBlockParameter;
import org.web3j.protocol.core.methods.request.EthFilter;
import org.web3j.protocol.core.methods.response.EthLog;

import java.io.IOException;

public class EthGetLogsExample {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));
    void ethGetLogsExample() throws IOException {
        EthFilter filterOption = new EthFilter(
            DefaultBlockParameter.valueOf("latest"),
            DefaultBlockParameter.valueOf("latest"),
            "0x87ac99835e67168d4f9a40580f8f5c33550ba88b");
        EthLog response = w3.ethGetLogs(filterOption).send();
        response.getResult();
    }
}
