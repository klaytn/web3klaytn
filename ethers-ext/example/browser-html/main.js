var provider = null;

// https://docs.ethers.org/v5/getting-started/#getting-started--connecting
async function connect(injectedProvider) {
  if (!injectedProvider) {
    alert("Please install wallet");
    return;
  }
  if (0) {
    provider = new ethers.providers.Web3Provider(injectedProvider);
  } else {
    provider = new ethers_ext.Web3Provider(injectedProvider);
  }
  
  await provider.send("eth_requestAccounts", []);
  const accounts = await provider.listAccounts(); // internally eth_accounts
  console.log("accounts", accounts);
  $("#textAccounts").html(accounts);
}
async function connectMM() { await connect(window.ethereum); }
async function connectKK() { await connect(window.klaytn); }

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
  const signer = provider.getSigner();
  const message = "Hello dapp";
  const signature = await signer.signMessage(message);
  console.log("signature", signature);
  $("#textSignature").html(signature);
}
