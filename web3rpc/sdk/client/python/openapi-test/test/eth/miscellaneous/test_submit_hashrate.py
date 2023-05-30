from base.testing import KlaytnBaseTesting


class TestEthSubmitHashrate(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.hashrate = "0x5"
        self.hashrateId = "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"

    def test_post(self):
        self.response = self.sdk.eth.submit_hashrate(
            self.hashrate, self.hashrateId
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.eth.submit_hashrate(self.hashrate)
        self.assertErrorCodeMissingRequiredArgument()
