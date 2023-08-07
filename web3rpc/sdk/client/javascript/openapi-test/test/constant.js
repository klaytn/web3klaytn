const path = require('path');
require('dotenv').config({ path: path.resolve('../.env') });

const BAOBAB_RPC=process.env.BAOBAB_RPC
const RPC=process.env.RPC
const CN_RPC=process.env.CN_RPC
const GOVERNANCE_RPC=process.env.GOVERNANCE_RPC
const PN_RPC=process.env.PN_RPC

module.exports={RPC, CN_RPC, BAOBAB_RPC, GOVERNANCE_RPC, PN_RPC}