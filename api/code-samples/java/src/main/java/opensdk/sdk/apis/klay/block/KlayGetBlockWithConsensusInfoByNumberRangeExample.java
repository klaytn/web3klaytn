package org.web3j.protocol.klaytn.core.klay.block;

import org.web3j.protocol.klaytn.core.method.response.KlayGetBlockWithConsensusInfoByNumberRangeResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class KlayGetBlockWithConsensusInfoByNumberRangeExample {
    private final OpenSDK sdk = new OpenSDK("https://api.baobab.klaytn.net:8651");
    void klayGetBlockWithConsensusInfoByNumberRangeExample() throws IOException {
        Integer blockNumber = 1;
        Integer numberRange = 1;
        KlayGetBlockWithConsensusInfoByNumberRangeResponse response = sdk.klay
                .getBlockWithConsensusInfoByNumberRange(blockNumber , numberRange).send();
        response.getResult();
    }
}
