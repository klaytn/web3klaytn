package opensdk.sdk.utils;
import org.web3j.protocol.klaytn.core.method.response.*;
import org.web3j.protocol.core.DefaultBlockParameter;
import org.web3j.protocol.core.methods.request.EthFilter;
import org.web3j.protocol.core.methods.response.EthGetTransactionCount;

import java.io.IOException;

public class EthUtils {
    public static EthGetTransactionCount getNonce() throws IOException {
        DefaultBlockParameter blockTag = DefaultBlockParameter.valueOf("latest");
        EthGetTransactionCount response = CommonUtils.w3ForServer.ethGetTransactionCount(CommonUtils.address, blockTag).send();
        return response;
    }

    public static org.web3j.protocol.core.methods.response.EthFilter getEthFilterId() throws IOException {
        EthFilter filterOption = new EthFilter(DefaultBlockParameter.valueOf("earliest"), DefaultBlockParameter.valueOf("latest")
                , "0x87ac99835e67168d4f9a40580f8f5c33550ba88b");
        filterOption.addOptionalTopics("0xd596fdad182d29130ce218f4c1590c4b5ede105bee36690727baa6592bd2bfc8");
        org.web3j.protocol.core.methods.response.EthFilter response = CommonUtils.w3ForServer.ethNewFilter(filterOption).send();
        return response;
    }

    public static String getNoncePending() throws IOException {
        KlayPendingTransactionsResponse res = CommonUtils.w3ForPN.klayPendingTransactions().send();
        return res.getResult().get(res.getResult().size() - 1).getNonce();
    }

}
