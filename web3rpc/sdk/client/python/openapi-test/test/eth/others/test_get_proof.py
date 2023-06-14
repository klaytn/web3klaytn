from base.testing import KlaytnBaseTesting

class TestEthGetProof(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.account = "0xe5cB067E90D5Cd1F8052B83562Ae670bA4A211a8"
        self.position = [0]
        self.blockNumber = "latest" # optional, default latest

    def test_post(self):
        self.response = self.w3.eth.get_proof(
            self.account, self.position, self.blockNumber
        )
        self.assertResponseSuccess()

    # def test_post_wrong_with_lack_paramaters(self):
    #     with self.assertRaises(ValueError):
    #         self.response = self.w3.eth.get_proof(self.blockNumber)

