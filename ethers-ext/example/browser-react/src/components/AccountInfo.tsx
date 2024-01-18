import { ethers } from 'ethers'
import { useState, useEffect } from 'react';
import { Account } from '../types';

type Props = {
  account: Account;
  setAccount: (account: Account) => void;
};

function AccountInfo({ account, setAccount }: Props) {
  var [balance, setBalance] = useState("");

  async function getBalance(){
    if (!account.provider) {
      return;
    }
    const signer = await account.provider.getSigner();    
    const balance = await signer.getBalance();
    setBalance(ethers.utils.formatEther(balance));
  };

  useEffect(() => {
    setInterval(getBalance, 3000);
  }, []);

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
