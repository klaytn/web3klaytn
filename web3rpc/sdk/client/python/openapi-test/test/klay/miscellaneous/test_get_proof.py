from base.testing import KlaytnBaseTesting


class TestKlayGetProof(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.account = "0x0000000000000000000000000000000000000400"
        self.position = ["0x0"]
        self.blockNumber = "latest" # optional, default latest

    def test_post(self):
        self.response = self.w3.klay.get_proof(
            self.account, self.position, self.blockNumber
        )
        self.assertRegex(self.response["codeHash"], r'^0x.*$')

    # def test_post_wrong_with_lack_paramaters(self):
    #     with self.assertRaises(ValueError):
    #         self.response = self.w3.eth.get_proof(self.blockNumber)

