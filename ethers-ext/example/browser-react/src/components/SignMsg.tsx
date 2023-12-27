import { Account } from '../types';

type Props = {
  account: Account;
};

function SignMsg({ account }: Props) {
  return (
    <div className="menu-component">
      <p>Account: { account.address }</p>
      <button>Sign Message</button>
    </div>
  );
};

export default SignMsg;
