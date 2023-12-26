import React, { Component } from 'react';
import { connectMM, connectKK, switchBaobab } from '../WalletConnector'


class Status extends Component {
    render(){
      return (
        <div>
            <p>{this.props.network}</p>
            <button id="btnNetBaobab" onClick={function(e){
              e.preventDefault();
              switchBaobab(); 
              this.props.onChangeNetwork('Baobab');
            }.bind(this)}>Switch to Baobab</button>
            <br/>
            <br/>
            <hr/>
            <br/>
            <p>{this.props.account}</p>
            <button id="btnConnectMM" onClick={async function(e){
              e.preventDefault();
              debugger;
              const accounts = await connectMM(); 
              this.props.onChangeAccount(accounts);
            }.bind(this)}>Connect MetaMask</button>
            <button id="btnConnectKK" onClick={function(e){
              e.preventDefault();
              const accounts = connectKK(); 
              this.props.onChangeAccount(accounts);
            }.bind(this)}>Connect Kaikas</button>
            <br/>
            <br/>
            <hr/>
        </div>  
      );
    }
  }

export default Status;