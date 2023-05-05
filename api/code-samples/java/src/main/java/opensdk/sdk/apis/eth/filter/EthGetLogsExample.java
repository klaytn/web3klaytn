package opensdk.sdk.apis.eth.filter;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthGetLogsResponse;
import org.klaytn.OpenSDK;
import org.web3j.protocol.core.DefaultBlockParameter;
import org.web3j.protocol.core.methods.request.EthFilter;
import org.web3j.protocol.core.methods.request.Filter;

import java.io.IOException;

public class EthGetLogsExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);
    void ethGetLogsExample() throws IOException {
        Filter<EthFilter> filterOption = new EthFilter(DefaultBlockParameter.valueOf("latest"),DefaultBlockParameter.valueOf("latest")
                ,"0x87ac99835e67168d4f9a40580f8f5c33550ba88b");
        EthGetLogsResponse response = sdk.eth.getLogs(filterOption).send();
        response.getResult();
    }
}
