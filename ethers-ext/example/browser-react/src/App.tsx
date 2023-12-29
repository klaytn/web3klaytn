import { useState } from 'react';
import './App.css';

import { ethers } from 'ethers'
// import { Web3Provider } from '@klaytn/ethers-ext'

import { Account } from "./types";
import Connect from './components/Connect';
import SignMsg from './components/SignMsg';
import LegacyVT from './components/LegacyVT';
import LegacySC from './components/LegacySC';

enum Menu {
  None,
  SignMsg,
  LegacyVT,
  LegacySC, 
  KlaytnVT,
  KlaytnSC,
  FeeDelegatedVT,
  FeeDelegatedSC, 
}

function App() {
  const [account, setAccount] = useState<Account>({});
  const [menu, setMenu] = useState<Menu>(Menu.None);

  return (
    <div className="App">
      <Connect account={account} setAccount={setAccount} />
      <div>{ account.address }</div>
      <hr/>
      { account.address ? (
        <div> 
          <h3>Sign Message</h3>
          <button onClick={() => setMenu(Menu.SignMsg)}>Expand</button>
          { menu === Menu.SignMsg ? <SignMsg account={account} /> : null }

          <h3>Send KLAY/ETH</h3>
          <button onClick={() => setMenu(Menu.LegacyVT)}>Expand</button>
          { menu === Menu.LegacyVT ? <LegacyVT account={account} /> : null }

          <h3>Call SmartContract</h3>
          <button onClick={() => setMenu(Menu.LegacySC)}>Expand</button>
          { menu === Menu.LegacySC ? <LegacySC account={account} /> : null }
        </div>
      ) : null }
    </div>
  );
}

export default App;
