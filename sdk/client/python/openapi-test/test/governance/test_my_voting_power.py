from base.testing import KlaytnBaseTesting
from opensdk.sdk import OpenSDK
from base.constants import GOVERNANCE_RPC


class TestMyVotingPower(KlaytnBaseTesting):
    sdk = OpenSDK(GOVERNANCE_RPC)

    def test_post(self):
        self.response = self.sdk.governance.my_voting_power()
        self.assertResponseSuccess()
