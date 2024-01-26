import { Account } from '../types';

type Props = {
  account: Account;
  setAccount: (account: Account) => void;
};

function AccountInfo({ account, setAccount }: Props) {
  return (
    <div>
        <p><b>Address</b>:{account.address}</p>

        {/* 
          // Balance is wrong value in Kaikas
          // e.g. window.klaytn.request({method:"klay_getBalance",params:["0x672e7a695066b131cE36842D978Ad9e251A2Df7E"]})
          <p><b>Balance</b>:{balance}</p> 
        */}
        <p>
          <b>Connected Wallet</b>:
          { account.isMetaMask ? "Metamask" : null }
          { account.isKaikas ? "Kaikas" : null }
        </p>
    </div>
  );
};

export default AccountInfo;
