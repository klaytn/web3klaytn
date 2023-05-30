from base.testing import KlaytnBaseTesting


class TestGovernanceVotes(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.governance.votes()
        self.assertResponseSuccess()
