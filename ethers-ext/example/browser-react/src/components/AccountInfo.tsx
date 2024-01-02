import { ethers } from 'ethers'
import { useState } from 'react';
import { Account } from '../types';

type Props = {
  account: Account;
  setAccount: (account: Account) => void;
};

function AccountInfo({ account, setAccount }: Props) {

  const signer = account.provider?.getSigner();
  var [balance, setBalance] = useState("");
  // var refreshIntervalId; 

  async function getBalance(){
    // @ts-ignore
    const _bal = await signer.getBalance()
    const _balance = ethers.utils.formatEther( _bal ); 
    console.log("balance", _balance);
    setBalance( _balance ); 
  };
  getBalance();
  // TODO: invertal is not cleared.
  // if (refreshIntervalId != null) {
  //   clearInterval(refreshIntervalId);
  // }
  // refreshIntervalId = setInterval(getBalance, 3000);
  
  return (
    <div>
        <p><b>Address</b>:{account.address}</p>
        <p><b>Balance</b>: {balance}</p>
        <p>
          <b>Connected Wallet</b>:
          { account.isMetaMask ? "Metamask" : null }
          { account.isKaikas ? "Kaikas" : null }
        </p>
    </div>
  );
};

export default AccountInfo;
