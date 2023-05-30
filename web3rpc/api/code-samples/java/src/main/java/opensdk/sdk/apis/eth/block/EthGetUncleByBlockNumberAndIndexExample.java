package opensdk.sdk.apis.eth.block;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.EthGetUncleByBlockNumberAndIndexResponse;
import org.web3j.protocol.core.DefaultBlockParameter;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;
import java.io.IOException;
import java.math.BigInteger;

public class EthGetUncleByBlockNumberAndIndexExample {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.LOCAL_URL));
    void ethGetUncleByBlockNumberAndIndexExample() throws IOException {
        String blockNum = "0xe8";
        String uncleIndex = "0x1";
        EthGetUncleByBlockNumberAndIndexResponse response = w3.ethGetUncleByBlockNumberAndIndex(
            DefaultBlockParameter.valueOf(new BigInteger(blockNum, 16)), uncleIndex
        ).send();
        response.getResult();
    }
}
