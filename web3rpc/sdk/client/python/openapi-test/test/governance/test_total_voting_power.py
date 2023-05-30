from base.testing import KlaytnBaseTesting
from opensdk.sdk import OpenSDK
from base.constants import GOVERNANCE_RPC


class TestTotalVotingPower(KlaytnBaseTesting):
    sdk = OpenSDK(GOVERNANCE_RPC)

    def test_post(self):
        self.response = self.sdk.governance.total_voting_power()
        self.assertResponseSuccess()
