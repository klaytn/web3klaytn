package org.web3j.example.contracts;

import java.io.IOException;
import org.web3j.crypto.KlayCredentials;
import org.web3j.example.keySample;
import org.web3j.protocol.core.DefaultBlockParameterName;
import org.web3j.protocol.core.methods.request.Transaction;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;
import org.web3j.protocol.klaytn.core.method.response.KlayCallResponse;
import org.web3j.abi.FunctionEncoder;
import org.web3j.abi.datatypes.Function;
import java.util.Collections;

public class ReadContractExample {
    /**
     * 
     */
    public static void run() throws IOException {

        Web3j web3j = Web3j.build(new HttpService(keySample.BAOBAB_URL));
        KlayCredentials credentials = KlayCredentials.create(keySample.LEGACY_KEY_privkey);
        String contractAddr = "0x95Be48607498109030592C08aDC9577c7C2dD505";

        Function function = new Function("number", // Function name
                Collections.emptyList(), // Function input parameters
                Collections.emptyList()); // Function returned parameters
        String txData = FunctionEncoder.encode(function);

        KlayCallResponse klayCall = web3j.klayCall(
                Transaction.createEthCallTransaction(credentials.getAddress(), contractAddr, txData),
                DefaultBlockParameterName.LATEST)
                .send();

        System.out.println("Contract Call(number) Result : " + klayCall.getResult());

    }

}
