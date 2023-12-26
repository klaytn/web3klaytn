import React, { Component } from 'react'
// import Status from "./components/Status"
// import AccountInfo from "./components/AccountInfo"
// import Send from "./components/Send"
import { ethers } from 'ethers'
import './App.css';

var provider = null;
var mode = "disconnected"; 
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
  _this.state.status.network = chainId;

  // Detect user account
  // https://docs.metamask.io/wallet/how-to/connect/access-accounts/
  // await provider.send("eth_requestAccounts");
  const accounts = await provider.listAccounts(); // internally eth_accounts
  console.log("accounts", accounts);
  _this.state.status.account = accounts[0]? accounts[0] : '';

  await getCurrentAccountBalance();

  mode = "read";

  _this.updateState( _this.state.status );

  injectedProvider.on("networkChanged", (_chainId) => {
    console.log("chainId changed", _chainId);
    // provider = new ethers_ext.providers.Web3Provider(injectedProvider);
    _this.state.status.network = _chainId;
    getCurrentAccountBalance();
  });

  injectedProvider.on("accountsChanged", async (_account) => {
    console.log("accounts changed", _account);
    _this.state.status.account = _account[0]; 
    getCurrentAccountBalance();
  });
}

async function connectMM( _this ) {
  await connect( window.ethereum, _this );
}

async function getCurrentAccountBalance(){
  if ( _this != null ) {
    _this.state.status.balance = await provider.send("eth_getBalance", [_this.state.status.account]);
    console.log("balance", _this.state.status.balance);
    _this.updateState( _this.state.status );
  }  
}

async function doSendTx(makeTxRequest) {
  try {
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    const txRequest = await makeTxRequest(address);

    const sentTx = await signer.sendTransaction(txRequest);
    console.log("sentTx", sentTx);
    const txhash = sentTx.hash;
    const explorerUrl = "https://baobab.klaytnscope.com/tx/";
    alert(explorerUrl+txhash);
  } catch (err) {
    console.error(err);
    // $("#textTxhash").html(`Error: ${err.message}`);
  }
}
async function sendLegacyVT(address) {
  doSendTx(async (address) => {
    return {
      to: address, 
      value: 0,
    };
  });
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      status: {
        network: '',
        account: '',
        balance: '',
      },
    }
  }
  updateState( _status ){
    this.setState({status:_status});
  }
  getContent(){
    if (mode === 'disconnected'){
      return (
        <p>Balance: {this.state.status.balance}
        </p>
      );
    } else if(mode === 'read'){
      return (
        <div>
          Balance: {this.state.status.balance}
          <p>
            <button id="btnSendLegacy" onClick={function(e){
              e.preventDefault();
              mode = "sendLegacy";
              this.updateState( this.state.status );
            }.bind(this)}>SendLegacy</button>
          </p>
        </div>
      );
    } else if ( mode === 'sendLegacy') {
      return (
        <form action="/sendLegacy" method="post"
          onSubmit={async function(e){
            e.preventDefault();
            await sendLegacyVT(e.target.to.value);
            mode = "read";
            await getCurrentAccountBalance(); 
          }}
        >
          <p>To: <input type="text" name="to" value={this.state.status.account}></input></p>
          <p>Value: <input type="text" name="amount" value="0"></input></p>
          <p><input type="submit"></input></p>
        </form>
      ); 
    }
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
            <p>Network: {this.state.status.network}</p>
            <hr/>
            <button id="btnConnectMM" onClick={async function(e){
              e.preventDefault();
              await connectMM( this ); 
            }.bind(this)}>Connect MetaMask</button>
            {/* <button id="btnConnectKK" onClick={function(e){
              e.preventDefault();
              const accounts = connectKK(); 
              this.props.onChangeAccount(accounts);
            }.bind(this)}>Connect Kaikas</button>             */}
            <p>Account: {this.state.status.account}</p>
            <hr/>
            {this.getContent()}
          </div>
      </div>
    );
  }
}

export default App;