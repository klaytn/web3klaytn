package opensdk.sdk.apis.debug.vMTracing;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugTraceBlockByNumberResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class DebugTraceBlockByNumberExample {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    void debugTraceBlockByNumberExample() throws IOException {
        int blockNum = 21;

        DebugTraceBlockByNumberResponse response = w3.debugTraceBlockByNumber(blockNum, null).send();
        response.getResult();
    }
}
