from base.testing import KlaytnBaseTesting


class TestMyVotingPower(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.governance.my_voting_power()
        self.assertResponseSuccess()
