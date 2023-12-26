import React, { Component } from 'react'
// import Status from "./components/Status"
// import AccountInfo from "./components/AccountInfo"
// import AccountSend from "./components/AccountSend"
import { ethers } from 'ethers'
import './App.css';

var provider = null;
var network = null;
var account = null;
var balance = null;
var _this = null; 

async function connect(injectedProvider, appThis ) {
  if (!injectedProvider) {
    alert("Please install wallet");
    return;
  }

  _this = appThis;

  // Wrap the window.{ethereum,klaytn} object with Web3Provider.
  //   provider = new Providers.Web3Provider(injectedProvider);
  // Uncomment to use the original ethers.js Web3Provider:
  provider = new ethers.providers.Web3Provider(injectedProvider);

  // Detect user network
  // https://docs.metamask.io/wallet/how-to/connect/detect-network/
  const chainId = await provider.send("eth_chainId");
  console.log("chainId", chainId);
  network = chainId;

  // Detect user account
  // https://docs.metamask.io/wallet/how-to/connect/access-accounts/
  // await provider.send("eth_requestAccounts");
  const accounts = await provider.listAccounts(); // internally eth_accounts
  console.log("accounts", accounts);
  account = accounts[0]? accounts[0] : '';

  await getCurrentAccountBalance();

  _this.updateState({
    currentNetwork: network,
    currentAccount: account,
    currentBalance: balance,
  });

  injectedProvider.on("networkChanged", (_chainId) => {
    console.log("chainId changed", _chainId);
    // provider = new ethers_ext.providers.Web3Provider(injectedProvider);
    _this.updateState({
      currentNetwork: _chainId,
      currentAccount: _this.state.status.currentAccount,
      currentBalance: _this.state.status.currentBalance,
    });
  });

  injectedProvider.on("accountsChanged", async (_account) => {
    console.log("accounts changed", _account);
    _this.updateState({
      currentNetwork: _this.state.status.currentNetwork,
      currentAccount: _account,
      currentBalance: _this.state.status.currentBalance,
    });
  });
}

async function connectMM( _this ) {
  await connect( window.ethereum, _this );
}

async function getCurrentAccountBalance(){
  if ( account != null ) {
    balance = await provider.send("eth_getBalance", [account]);
    console.log("balance", balance);
  }  
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      status: {
        currentNetwork: '',
        currentAccount: '',
        currentBalance: '',
      },
    }
  }
  updateState( _status ){
    this.setState({status:_status});
  }
  render() {
    console.log('App render');
    return (
      <div className="App">
          <div> 
            {/* <button id="btnNetBaobab" onClick={function(e){
              e.preventDefault();
              switchBaobab(); 
              this.props.onChangeNetwork('Baobab');
            }.bind(this)}>Switch to Baobab</button> */}
            <p>Network: {this.state.status.currentNetwork}</p>
            <hr/>
            <button id="btnConnectMM" onClick={async function(e){
              e.preventDefault();
              debugger;
              await connectMM( this ); 
              this.updateState({
                currentNetwork: network,
                currentAccount: account,
                currentBalance: balance, 
              });
            }.bind(this)}>Connect MetaMask</button>
            {/* <button id="btnConnectKK" onClick={function(e){
              e.preventDefault();
              const accounts = connectKK(); 
              this.props.onChangeAccount(accounts);
            }.bind(this)}>Connect Kaikas</button>             */}
            <p>Account: {this.state.status.currentAccount}</p>
            <hr/>
            <p>Balance: {this.state.status.currentBalance}</p>
            <hr/>
          </div>
        
      </div>
    );
  }
}

export default App;