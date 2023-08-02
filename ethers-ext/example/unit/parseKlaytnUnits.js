const { BigNumber } = require("@ethersproject/bignumber");
const { parseKlaytnUnits, parseKlay } = require("@klaytn/ethers-ext");

// 
// https://docs.klaytn.foundation/content/klaytn/design/klaytn-native-coin-klay
// https://docs.ethers.org/v5/api/utils/display-logic/#display-logic--units
//
async function main() {
    let n = BigNumber.from( parseKlaytnUnits("1.0") );
    console.log( n );
    // { BigNumber: "1000000000000000000" }
    console.log( n.toString() );
    // "1000000000000000000"
    
    n = BigNumber.from( parseKlaytnUnits("1.0", "KLAY") );
    console.log( n.toString() );
    // "1000000000000000000"
    
    n = BigNumber.from( parseKlaytnUnits("1.0", 18) );
    console.log( n.toString() );
    // "1000000000000000000"
    
    n = BigNumber.from( parseKlaytnUnits("121.0", "StoN") );
    console.log( n.toString() );
    // "121000000000"

    n = BigNumber.from( parseKlaytnUnits("121.0", "Gpeb") );
    console.log( n.toString() );
    // "121000000000"
    
    n = BigNumber.from( parseKlaytnUnits("121.0", 9) );
    console.log( n.toString() );
    // "121000000000"
    
    n = BigNumber.from( parseKlay("3.0") );
    console.log( n.toString() );
    // "3000000000000000000"

    n = BigNumber.from( parseKlay("0.5") );
    console.log( n.toString() );
    // "500000000000000000"
}

main();