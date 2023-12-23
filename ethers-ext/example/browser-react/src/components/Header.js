import React, { Component } from 'react';
import { connectMM, connectKK, switchBaobab } from '../WalletConnector'


class Header extends Component {
    render(){
      return (
        <header>
            <p>{this.props.network}</p>
            <button id="btnNetBaobab" onClick={function(e){
              e.preventDefault();
              switchBaobab(); 
              this.props.onChangeNetwork('Baobab');
            }.bind(this)}>Switch to Baobab</button>
            <hr/>
            <p>{this.props.account}</p>
            <button id="btnConnectMM" onClick={function(e){
              e.preventDefault();
              const accounts = connectMM(); 
              this.props.onChangeAccount(accounts);
            }.bind(this)}>Connect MetaMask</button>
            <button id="btnConnectKK" onClick={function(e){
              e.preventDefault();
              const accounts = connectKK(); 
              this.props.onChangeAccount(accounts);
            }.bind(this)}>Connect Kaikas</button>
            <hr/>
        </header>  
      );
    }
  }

export default Header;