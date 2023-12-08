var provider = null;
var accounts = null;

// https://docs.ethers.org/v5/getting-started/#getting-started--connecting
async function connect(injectedProvider) {
  if (!injectedProvider) {
    alert("Please install wallet");
    return;
  }
  if (1) {
    console.log("use ethers");
    provider = new ethers.providers.Web3Provider(injectedProvider);
  } else {
    console.log("use ethers-ext");
    provider = new ethers_ext.Web3Provider(injectedProvider);
  }

  await provider.send("eth_requestAccounts", []);
  accounts = await provider.listAccounts(); // internally eth_accounts
  console.log("accounts", accounts);
  $("#textAccounts").html(accounts);
}
async function connectMM() {
  $("#textSignature").html("");
  $("#textTxhash").html("");
  await connect(window.ethereum);
}
async function connectKK() {
  $("#textSignature").html("");
  $("#textTxhash").html("");
  await connect(window.klaytn);
}

// https://docs.metamask.io/wallet/how-to/add-network/
// EIP-3085 wallet_addEthereumChain
// EIP-3326 wallet_switchEthereumChain
async function switchNetwork(networkSpec) {
  console.log("switching to", networkSpec);
  try {
    await provider.send("wallet_switchEthereumChain", [{ chainId: networkSpec.chainId }]);
  } catch (e) {
    await provider.send("wallet_addEthereumChain", [networkSpec]);
  }
}
async function switchBaobab() {
  await switchNetwork({
    chainId: "0x3e9",
    chainName: "Klaytn Baobab",
    nativeCurrency: {
      name: "KLAY",
      symbol: "KLAY",
      decimals: 18,
    },
    rpcUrls: ["https://public-en-baobab.klaytn.net"],
    blockExplorerUrls: ["https://baobab.klaytnscope.com/"],
  });
}
async function switchLocal() {
  await switchNetwork({
    chainId: "0x7a69",
    chainName: "localhost 8545",
    nativeCurrency: {
      name: "KLAY",
      symbol: "KLAY",
      decimals: 18,
    },
    rpcUrls: ["http://localhost:8545"],
    blockExplorerUrls: ["http://localhost:4000"],
  });
}

async function signMsg() {
  const isKaikas = provider.provider.isKaikas || false;

  const { hexlify, toUtf8Bytes, keccak256, concat } = ethers.utils;


  try {
    if (isKaikas) {
      const signer = provider.getSigner();
      const message = "Hello dapp";
      const hexMessage = hexlify(toUtf8Bytes(message));

      const signature = await provider.send("eth_sign", [await signer.getAddress(), hexMessage]);
      console.log("signature", signature);
      $("#textSignature").html(signature);

      // Similar to ethers.utils.hashMessage but uses Klaytn prefix
      var digest = keccak256(
        concat([
          toUtf8Bytes("\x19Klaytn Signed Message:\n"),
          toUtf8Bytes(String(message.length)),
          toUtf8Bytes(message),
        ])
      );
      const recoveredAddress = ethers.utils.recoverAddress(digest, signature);
      console.log("recoveredAddress", recoveredAddress);
      $("#textRecoveredAddress").html(recoveredAddress);
    } else {
      const signer = provider.getSigner();
      const message = "Hello dapp";

      const signature = await signer.signMessage(message);
      console.log("signature", signature);
      $("#textSignature").html(signature);

      const recoveredAddress = ethers.utils.verifyMessage(message, signature);
      console.log("recoveredAddress", recoveredAddress);
      $("#textRecoveredAddress").html(recoveredAddress);
    }
  } catch (err) {
    console.error(err);
    $("#textSignature").html(`Error: ${err.message}`);
  }

/*

  if (!currentInjectedProvider.isKaikas) {
    try {
      const from = accounts[0];
      const msg = "0x61626364";
      const sign = await ethereum.request({
        method: 'personal_sign',
        params: [msg, from],
      });
      $("#textSignature").html(sign);

      const digest = ethers.utils.hashMessage("abcd");
      console.log(digest);
      const rec = ethers.utils.recoverAddress(digest, sign);
      console.log(rec);

    } catch (err) {
      console.error(err);
      $("#textSignature").html(`Error: ${err.message}`);
    }
  }
  else if (currentInjectedProvider.isKaikas) {
    try {
      const from = accounts[0];
      const msg = "0x61626364";
      const sign = await klaytn.request({
        method: 'eth_sign',
        params: [from, msg],
      });
      $("#textSignature").html(sign);

      var digest = ethers.utils.hashMessage("abcd"); // Ethereum prefix
      var digest = ethers.utils.keccak256("0x61626364"); // no prefix

      var message = "abcd";
      var digest = ethers.utils.keccak256( // Klaytn prefix
        ethers.utils.concat([
          ethers.utils.toUtf8Bytes("\x19Klaytn Signed Message:\n"),
          ethers.utils.toUtf8Bytes(String(message.length)),
          ethers.utils.toUtf8Bytes(message),
        ])
      )
      console.log(digest);
      const rec = ethers.utils.recoverAddress(digest, sign);
      console.log(rec);

    } catch (err) {
      console.error(err);
      $("#textSignature").html(`Error: ${err.message}`);
    }
  }
  */
}

async function sendLegacy() {

  if (activeWallet == "metamask") {
    ethereum
      .request({
        method: 'eth_sendTransaction',
        // The following sends an EIP-1559 transaction. Legacy transactions are also supported.
        params: [
          {
            from: accounts[0], // The user's active address.
            to: accounts[0], // same with sender for testing
            value: 0,
          },
        ],
      })
      .then(function (txHash) {
        console.log(txHash);
        $("#textTxhash").html(txHash);
      })
      .catch((error) => console.error(error));
  }
  else if (activeWallet == "kaikas") {
    klaytn
      .request({
        method: 'eth_sendTransaction',
        // The following sends an EIP-1559 transaction. Legacy transactions are also supported.
        params: [
          {
            from: accounts[0], // The user's active address.
            to: accounts[0], // same with sender for testing
            value: 0,
          },
        ],
      })
      .then(function (txHash) {
        console.log(txHash);
        $("#textTxhash").html(txHash);
      })
      .catch((error) => console.error(error));
  }
}
