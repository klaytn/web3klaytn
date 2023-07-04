from base.testing import KlaytnBaseTesting


class TestGovernanceVotes(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.governance.votes()
        self.assertTrue(len(self.response) >= 0)
