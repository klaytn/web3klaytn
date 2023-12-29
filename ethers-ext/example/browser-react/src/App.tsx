import { useState } from 'react';
import './App.css';

import { ethers } from 'ethers'
// import { Web3Provider } from '@klaytn/ethers-ext'

import { Account } from "./types";
import Connect from './components/Connect';
import SignMsg from './components/SignMsg';
import SendLegacyVT from './components/SendLegacyVT';
import SendLegacySC from './components/SendLegacySC';

enum Menu {
  None,
  SignMsg,
  SendLegacyVT,
  SendLegacySC, 
  sendKlaytnVT,
  sendKlaytnSC,
  sendFeeDelegatedVT,
  sendFeeDelegatedSC, 
}

function App() {
  const [account, setAccount] = useState<Account>({});
  const [menu, setMenu] = useState<Menu>(Menu.None);

  return (
    <div className="App">
      <Connect account={account} setAccount={setAccount} />
      <div>{ account.address }</div>

      <hr/>
      <h3>Sign Message</h3>
      <button onClick={() => setMenu(Menu.SignMsg)}>Expand</button>
      { menu === Menu.SignMsg ? <SignMsg account={account} /> : null }

      <h3>Send KLAY/ETH</h3>
      <button onClick={() => setMenu(Menu.SendLegacyVT)}>Expand</button>
      { menu === Menu.SendLegacyVT ? <SendLegacyVT account={account} /> : null }

      <h3>Call SmartContract</h3>
      <button onClick={() => setMenu(Menu.SendLegacySC)}>Expand</button>
      { menu === Menu.SendLegacySC ? <SendLegacySC account={account} /> : null }

    </div>
  );
}

export default App;
