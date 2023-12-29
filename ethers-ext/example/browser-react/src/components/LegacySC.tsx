import { useState } from 'react';
import { Account } from '../types';
import { doSendTx } from '../Util';

type Props = {
  account: Account;
};

// https://baobab.klaytnscope.com/account/0xa9eF4a5BfB21e92C06da23Ed79294DaB11F5A6df?tabId=contractCode
var contractAddress = "0xa9eF4a5BfB21e92C06da23Ed79294DaB11F5A6df";
var contractCalldata = "0xd09de08a"; // function increment()

function LegacySC({ account }: Props) {
    const [txURL, setTxURL] = useState('');

    async function sendLegacySC() {
        const sentTxURL = await doSendTx( account, async () => {
            return {
                to: contractAddress,
                data: contractCalldata,
            };
        });
        setTxURL( sentTxURL? sentTxURL: 'doSendTx returns null');
    }
    return (
        <div className="menu-component"> 
            <form action="/sendLegacy" method="post"
                onSubmit={async function(e){
                    e.preventDefault();
                    // @ts-ignore
                    await sendLegacySC();
                }}
            >
                <p>To: <input type="text" name="to" value={contractAddress}></input></p>
                <p>Data: <input type="text" name="data" value={contractCalldata}></input></p>
                <p><input type="submit"></input></p>
            </form>
            <a href={txURL} target='_blank' rel="noreferrer">{txURL}</a>
        </div>
    );
};

export default LegacySC;