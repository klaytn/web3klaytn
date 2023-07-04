from base.testing import KlaytnBaseTesting


class TestMyVotes(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.governance.my_votes()
        self.assertTrue(len(self.response) >= 0)
