import React, { Component } from 'react';
import Status from "./components/Status"
import AccountInfo from "./components/AccountInfo"
import AccountSend from "./components/AccountSend"
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      status: {
        currentNetwork: '',
        currentAccount: '',
      },
    }
  }
  render() {
    console.log('App render');
    return (
      <div className="App">
        <Status 
          network={this.state.status.currentNetwork}
          account={this.state.status.currentAccount}
          onChangeNetwork={function(network){
            this.setState({status:{
              currentNetwork: network,
              currentAccount: this.state.status.currentAccount
            }});
          }.bind(this)}
          onChangeAccount={function(accounts){
            this.setState({status:{
              currentNetwork: this.state.status.currentNetwork,
              currentAccount: accounts[0]
            }});
          }.bind(this)}
        >
        </Status>
        <AccountInfo>
          
        </AccountInfo>
      </div>
    );
  }
}

export default App;