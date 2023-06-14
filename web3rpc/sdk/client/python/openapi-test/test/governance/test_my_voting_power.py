from base.testing import KlaytnBaseTesting
from web3 import Web3
from web3py_ext import extend
from base.constants import GOVERNANCE_RPC


class TestMyVotingPower(KlaytnBaseTesting):
    w3 = Web3(Web3.HTTPProvider(GOVERNANCE_RPC))

    def test_post(self):
        self.response = self.w3.governance.my_voting_power()
        self.assertIsInstance(self.response, int)
