from base.testing import KlaytnBaseTesting


class TestEthSubmitHashrate(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.hashrate = "0x5"
        self.hashrateId = "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"

    def test_post(self):
        self.response = self.w3.eth.submit_hashrate(
            self.hashrate, self.hashrateId
        )
        self.assertIsInstance(self.response, bool)

    # def test_post_wrong_with_lack_paramaters(self):
    #     with self.assertRaises(ValueError):
    #         self.response = self.w3.eth.submit_hashrate(self.hashrate)

