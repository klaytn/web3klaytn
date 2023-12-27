import { useState } from 'react';
import './App.css';
import Connect from './components/Connect';

import { Account } from "./types";
import SignMsg from './components/SignMsg';

enum Menu {
  None,
  SignMsg,
  LegacyVT,
}

function App() {
  const [account, setAccount] = useState<Account>({});
  const [menu, setMenu] = useState<Menu>(Menu.None);

  return (
    <div className="App">
      <Connect account={account} setAccount={setAccount} />
      <div>{ account.address }</div>

      <hr />
      <h3>Sign Message</h3>
      <button onClick={() => setMenu(Menu.SignMsg)}>Expand</button>
      { menu === Menu.SignMsg ? <SignMsg account={account} /> : null }

      <h3>Send KLAY/ETH</h3>
      <button onClick={() => setMenu(Menu.LegacyVT)}>Expand</button>
      { menu === Menu.LegacyVT ? <SignMsg account={account} /> : null }

    </div>
  );
}

export default App;
