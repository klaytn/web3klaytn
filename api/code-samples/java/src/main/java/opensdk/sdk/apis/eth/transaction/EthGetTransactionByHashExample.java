package opensdk.sdk.apis.eth.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthGetTransactionByHashResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class EthGetTransactionByHashExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);

    void ethGetTransactionByHashExample() throws IOException {
        String blockHash = "0x88df016429689c079f3b2f6ad39fa052532c56795b733da78a91ebe6a713944b";
        EthGetTransactionByHashResponse response = sdk.eth.getTransactionByHash(blockHash).send();
        response.getResult();
    }
}
