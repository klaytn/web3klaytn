from base.testing import KlaytnBaseTesting


class TestShowTally(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.governance.show_tally()
        self.assertResponseSuccess()
