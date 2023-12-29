import { Account } from '../types';

import { ethers } from 'ethers'
// import { Web3Provider } from '@klaytn/ethers-ext'
import { Web3Provider } from '@ethersproject/providers';

type Props = {
  account: Account;
  setAccount: (account: Account) => void;
};

function Connect({ account, setAccount }: Props) {

  var provider: Web3Provider;

  function isKaikas() {
    // @ts-ignore
    return provider && provider.provider.isKaikas;
  }
  
  async function connect(injectedProvider: any, appThis: undefined ) {
    if (!injectedProvider) {
      alert("Please install wallet");
      return;
    }
  
    // Wrap the window.{ethereum,klaytn} object with Web3Provider.
    //   provider = new Providers.Web3Provider(injectedProvider);
    // Uncomment to use the original ethers.js Web3Provider:
    provider = new ethers.providers.Web3Provider(injectedProvider);
  
    // Detect user network
    // https://docs.metamask.io/wallet/how-to/connect/detect-network/
    const chainId = await provider.send("eth_chainId", []);
    console.log("chainId", chainId);
  
    // Detect user account
    // https://docs.metamask.io/wallet/how-to/connect/access-accounts/
    const accounts = await provider.send("eth_requestAccounts", []);
    // const accounts = await provider.listAccounts(); // internally eth_accounts
    console.log("accounts", accounts);
  
    setAccount({
      provider: provider,
      isKaikas: isKaikas(),
      isMetaMask: !isKaikas(),
      chainId: chainId,
      address: accounts[0]
    });
  
    injectedProvider.on("networkChanged", (_chainId: any) => {
      console.log("chainId changed", _chainId);
      // provider = new ethers_ext.providers.Web3Provider(injectedProvider);
      setAccount({
        provider: provider,
        isKaikas: isKaikas(),
        isMetaMask: !isKaikas(),
        chainId: _chainId,
        address: accounts[0]
      });
    });
  
    injectedProvider.on("accountsChanged", async (_accounts: any[]) => {
      console.log("accounts changed", _accounts);
      setAccount({
        provider: provider,
        isKaikas: isKaikas(),
        isMetaMask: !isKaikas(),
        chainId: chainId,
        address: _accounts[0]
      });
    });
  }

  async function connectMM() {
    // @ts-ignore
    await connect( window.ethereum );
  }

  async function connectKK() {
    debugger
    // @ts-ignore
    await connect( window.klaytn );
  }

  return (
    <div> 
      <button onClick={connectMM}>Connect MetaMask</button>
      <button onClick={connectKK}>Connect Kaikas</button>
    </div>
  );
};

export default Connect;
