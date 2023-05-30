from base.testing import KlaytnBaseTesting


class TestMyVotes(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.governance.my_votes()
        self.assertResponseSuccess()
