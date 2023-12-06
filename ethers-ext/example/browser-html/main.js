// const browser = window.klaytn; 
// const nameSpace = "klay";

const browser = window.ethereum;
const nameSpace = "eth";

async function connect() {
  if (typeof browser !== "undefined") {
    try {
      await browser.request({method: nameSpace+"_requestAccounts"});
    } catch (error) {
      console.log(error);
    }
    document.getElementById("connectButton").innerHTML = "Connected";
    const accounts = await browser.request({ method: nameSpace+"_accounts" });
    document.getElementById("accounts").innerHTML = accounts;
    console.log(accounts);
  } else {
    document.getElementById("connectButton").innerHTML =
        "Please install Kaikas";
  }
}

async function execute() {
  if (typeof browser !== "undefined") {
    const senderAddr = "0xe15cd70a41dfb05e7214004d7d054801b2a2f06b";
    const senderPriv = "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";
    const senderNewPriv = "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";

    const provider = new ethers.providers.Web3Provider(browser);
    const signer = provider.getSigner();

    // 서명은 되지만 트랜잭션으로 전송되고 callback이 없어서 확인이 안됨
    // const message = 'Hello dapp';
    // const signature = await signer.signMessage(message);
    // console.log( signature );

    try {
      let tx = {
        type: ethers_ext.TxType.AccountUpdate,
        from: senderAddr,
        key: {
          type: ethers_ext.AccountKeyType.Public,
          key: ethers.utils.computePublicKey(senderNewPriv, true),
        }
      };

      // 1.
      // const populatedTx = await signer.populateTransaction(tx);
      // const signedTx = await signer.signTransaction(populatedTx);

      // const sentTx = await this._sendRawTransaction(signedTx);
      // console.log("sentTx", sentTx);

      // 2.
      // const sentTx = await signer.sendTransaction(tx);
      // console.log("sentTx", sentTx);

      // 3.
      let params = [
        {
          from: "0x672e7a695066b131cE36842D978Ad9e251A2Df7E",
          to: "0x672e7a695066b131cE36842D978Ad9e251A2Df7E",
          gas: "0x76c0", // 30400
          value: "0x0", // 2441406250
        }
      ];

      window.klaytn
        .request({
          method: nameSpace+"_sendTransaction",
          params: params,
        })
        .then((result) => {
          // The result varies by RPC method.
          // For example, this method returns a transaction hash hexadecimal string upon success.
          console.log(result);
        })
        .catch((error) => {
          // If the request fails, the Promise rejects with an error.
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  } else {
    document.getElementById("executeButton").innerHTML =
        "Please install Kaikas";
  }
}