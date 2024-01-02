import { useState } from 'react';
import { Account } from '../types';
import { doSignTx } from '../util';
import { TxType } from '@klaytn/js-ext-core';

type Props = {
  account: Account;
};

// https://baobab.klaytnscope.com/account/0xa9eF4a5BfB21e92C06da23Ed79294DaB11F5A6df?tabId=contractCode
var contractAddress = "0xa9eF4a5BfB21e92C06da23Ed79294DaB11F5A6df";
var contractCalldata = "0xd09de08a"; // function increment()

function KlaytnFeeDelSC({ account }: Props) {
    const [txURL, setTxURL] = useState('');

    async function sendKlaytnFeeDelSC() {
        const sentTxURL = await doSignTx( account, async () => {
            return {
                type: TxType.FeeDelegatedSmartContractExecution, // 0x31
                to: contractAddress,
                data: contractCalldata,
            };
        });
        setTxURL( sentTxURL? sentTxURL: 'doSendTx returns null');
    }
    return (
        <div className="menu-component"> 
            <form action="/sendKlaytnFeeDel" method="post"
                onSubmit={async function(e){
                    e.preventDefault();
                    // @ts-ignore
                    await sendKlaytnFeeDelSC();
                }}
            >
                <p>Type: <input type="text" name="type" value="0x31"></input></p>
                <p>To: <input type="text" name="to" value={contractAddress}></input></p>
                <p>Data: <input type="text" name="data" value={contractCalldata}></input></p>
                <p><input type="submit"></input></p>
            </form>
            <a href={txURL} target='_blank' rel="noreferrer">{txURL}</a>
        </div>
    );
};

export default KlaytnFeeDelSC;