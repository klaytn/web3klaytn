from base.testing import KlaytnBaseTesting


class TestShowTally(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.governance.show_tally()
        self.assertTrue(len(self.response) >= 0)
