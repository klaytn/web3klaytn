package opensdk.sdk.utils;

import opensdk.sdk.models.*;
import org.web3j.protocol.core.DefaultBlockParameter;
import org.web3j.protocol.core.methods.request.EthFilter;
import org.web3j.protocol.core.methods.request.Filter;

import java.io.IOException;

public class EthUtils {
    public static EthGetTransactionCountResponse getNonce() throws IOException {
        String blockTag = "latest";
        EthGetTransactionCountResponse response = CommonUtils.sdk.eth.getTransactionCount(CommonUtils.address, blockTag).send();
        return response;
    }

    public static EthNewFilterResponse getEthFilterId() throws IOException {
        Filter<EthFilter> filterOption = new EthFilter(DefaultBlockParameter.valueOf("earliest"), DefaultBlockParameter.valueOf("latest")
                , "0x87ac99835e67168d4f9a40580f8f5c33550ba88b");
        filterOption.addOptionalTopics("0xd596fdad182d29130ce218f4c1590c4b5ede105bee36690727baa6592bd2bfc8");
        EthNewFilterResponse response = CommonUtils.sdk.eth.newFilter(filterOption).send();
        return response;
    }

    public static String getNoncePending() throws IOException {
        EthPendingTransactionsResponse res = CommonUtils.sdk_PN.eth.pendingTransactions().send();
        return res.getResult().get(res.getResult().size() - 1).getNonce();
    }

}
