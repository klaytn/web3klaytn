from base.testing import KlaytnBaseTesting


class TestRewardbase(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.klay.rewardbase()
        self.assertRegex(self.response, r'^0x.*$')
