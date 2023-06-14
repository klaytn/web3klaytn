from base.testing import KlaytnBaseTesting


class TestEthSubmitWork(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.nonce = "0x0000000000000001"
        self.powHash = "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"
        self.mixDigest = "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"

    def test_post(self):
        self.response = self.w3.eth.submit_work(
            self.nonce, self.powHash, self.mixDigest
        )
        self.assertIsInstance(self.response, bool)

    # def test_post_wrong_with_lack_paramaters(self):
    #     with self.assertRaises(ValueError):
    #         self.response = self.w3.eth.submit_work(self.powHash)

