package opensdk.sdk.apis.eth.block;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthGetBlockTransactionCountByHashResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class EthGetBlockTransactionCountByHashExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);

    void ethGetBlockTransactionCountByHashExample() throws IOException {
        EthGetBlockTransactionCountByHashResponse br = sdk.eth.getBlockTransactionCountByHash(
            "0x0c11803ab36110db993e7520908b9ba9336cca2f2dcc9b6130c481a3ccdc2621")
        .send();
        br.getResult();
    }
}
