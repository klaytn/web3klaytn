import { useState } from 'react';
import './App.css';

import { Account } from "./types";
import Connect from './components/Connect';
import AccountInfo from './components/AccountInfo'
import SignMsg from './components/SignMsg';
import LegacyVT from './components/LegacyVT';
import LegacySC from './components/LegacySC';
import KlaytnVT from './components/KlaytnVT';
import KlaytnSC from './components/KlaytnSC';

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
      <hr/>
      <AccountInfo account={account} setAccount={setAccount} />
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
      { account.isKaikas ? (
        <div>
          <hr/>
          <h3>Klaytn Features</h3>
          <h3>Send ValueTransfer tx</h3>
          <button onClick={() => setMenu(Menu.KlaytnVT)}>Expand</button>
          { menu === Menu.KlaytnVT ? <KlaytnVT account={account} /> : null }
          <h3>Send SmartContractExecution tx</h3>
          <button onClick={() => setMenu(Menu.KlaytnSC)}>Expand</button>
          { menu === Menu.KlaytnSC ? <KlaytnSC account={account} /> : null }
      </div>
      ) : null }
    </div>
  );
}

export default App;
