from base.testing import KlaytnBaseTesting


class TestRewardbase(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.klay.rewardbase()
        self.assertResponseSuccess()
