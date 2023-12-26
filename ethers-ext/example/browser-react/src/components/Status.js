import React, { Component } from 'react';
import { connectMM, connectKK, switchBaobab } from '../Connector'


class Status extends Component {
    render(){
      return (
        <div> 
            <button id="btnConnectMM" onClick={async function(e){
              e.preventDefault();
              debugger;
              const accounts = await connectMM(); 
              this.props.onChangeAccount(accounts);
            }.bind(this)}>Connect MetaMask</button>
            <button id="btnConnectKK" onClick={function(e){
              e.preventDefault();
              const accounts = connectKK(this, function(n){ this.props.onChangeNetwork(n) }, function(a){ this.props.onChangeAccount(a); } ); 
              this.props.onChangeAccount(accounts);
            }.bind(this)}>Connect Kaikas</button>            
            <p>Account: {this.props.account}</p>
            <br/>
            <br/>
            <hr/>
            <br/>
            <button id="btnNetBaobab" onClick={function(e){
              e.preventDefault();
              switchBaobab(); 
              this.props.onChangeNetwork('Baobab');
            }.bind(this)}>Switch to Baobab</button>
            <p>Network: {this.props.network}</p>
            <br/>
            <br/>
            <hr/>
        </div>  
      );
    }
  }

export default Status;