from base.testing import KlaytnBaseTesting


class TestTotalVotingPower(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.governance.total_voting_power()
        self.assertResponseSuccess()
