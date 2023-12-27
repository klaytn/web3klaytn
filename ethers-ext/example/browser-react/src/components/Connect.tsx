import { Account } from '../types';

type Props = {
  account: Account;
  setAccount: (account: Account) => void;
};

function Connect({ account, setAccount }: Props) {

  function connectMM() {
    alert("mm")
    setAccount({
      address: "0x123",
    })
  }

  return (
    <button onClick={connectMM}>Connect MetaMask</button>
  );
};

export default Connect;
