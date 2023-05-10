from base.testing import KlaytnBaseTesting


class TestEthGetProof(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.account = "0xe5cB067E90D5Cd1F8052B83562Ae670bA4A211a8"
        self.keys = ["0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421"]
        self.blockNumber = "latest"

    def test_post(self):
        self.response = self.sdk.eth.get_proof(
            self.account, self.keys, self.blockNumber
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.eth.get_proof(self.blockNumber)
        self.assertErrorCodeMissingRequiredArgument()
