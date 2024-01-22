import { ethers } from 'ethers'
import { useState, useEffect } from 'react';
import { Account } from '../types';

type Props = {
  account: Account;
  setAccount: (account: Account) => void;
};

function AccountInfo({ account, setAccount }: Props) {
  var [balance, setBalance] = useState("");

  useEffect(() => {
    const _account = account;
    const getBalance = async function () {
      debugger
      if (!_account.provider) {
        return;
      }
      
      const signer = await _account.provider.getSigner();   
      console.log( signer ) 
      const balance = await signer.getBalance();
      console.log( balance ) 
      setBalance(ethers.utils.formatEther(balance));
    };

    // TODO : have to debug for not referencing account.provider
    setInterval(getBalance, 3000);
  }, [account]);

  return (
    <div>
        <p><b>Address</b>:{account.address}</p>
        <p><b>Balance</b>:{balance}</p>
        <p>
          <b>Connected Wallet</b>:
          { account.isMetaMask ? "Metamask" : null }
          { account.isKaikas ? "Kaikas" : null }
        </p>
    </div>
  );
};

export default AccountInfo;
