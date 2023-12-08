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

  if (provider) { // re-connect after changing network.
    await connect(provider.provider);
  }
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
  const { hexlify, toUtf8Bytes } = ethers.utils;

  try {
    if (isKaikas) {
      const signer = provider.getSigner();
      const message = "Hello dapp";
      const hexMessage = hexlify(toUtf8Bytes(message));

      const signature = await provider.send("eth_sign", [await signer.getAddress(), hexMessage]);
      console.log("signature", signature);
      $("#textSignature").html(signature);

      const recoveredAddress = await provider.send("klay_recoverFromMessage", [await signer.getAddress(), hexMessage, signature, "latest"]);
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
}

async function sendLegacy() {
  try {
    const signer = provider.getSigner();
    const address = await signer.getAddress();

    const sentTx = await signer.sendTransaction({
      from: address,
      to: address,
      value: 0,
    });
    console.log("sentTx", sentTx);
    $("#textTxhash").html(sentTx.hash);
  } catch (err) {
    console.error(err);
    $("#textTxhash").html(`Error: ${err.message}`);
  }
}
