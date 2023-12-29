import { useState } from 'react';
import { BigNumber, ethers } from 'ethers'
// import { Web3Provider } from '@klaytn/ethers-ext'
import { Web3Provider } from '@ethersproject/providers';
import { Account } from '../types';
import { isKaikas } from '../Util';

type Props = {
  account: Account;
  setAccount: (account: Account) => void;
};

function AccountInfo({ account, setAccount }: Props) {

  const provider = account.provider; 
  var [balance, setBalance] = useState(0);
  var refreshIntervalId; 

  async function getBalance(){
    if ( account.address && !isKaikas(account)) {
        // @ts-ignore
        const _balance = await provider.send("eth_getBalance", [account.address]);
        console.log("balance", _balance);
        setBalance( _balance ); 
    } else if ( account.address && isKaikas(account)) {
        // @ts-ignore
        const _balance = await provider.send("klay_getBalance", [account.address, "latest"]);
        console.log("balance", _balance);
        setBalance( _balance ); 
    }
  };
  getBalance();
//   TODO: invertal is not cleared.
//   if (refreshIntervalId != null) {
//     clearInterval(refreshIntervalId);
//   }
//   refreshIntervalId = setInterval(getBalance, 3000);
  
  return (
    <div>
        <p><b>Address</b>:{account.address}</p>
        <p><b>Balance</b>: {balance}</p>
    </div>
  );
};

export default AccountInfo;
