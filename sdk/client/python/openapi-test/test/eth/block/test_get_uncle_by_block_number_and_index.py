from base.testing import KlaytnBaseTesting


class TestEthGetUncleByBlockNumberAndIndex(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blochTag = "0xe8"
        self.uncleIndex = "0x1"

    def test_post(self):
        klay_response = self.sdk.eth.get_uncle_by_block_number_and_index(
            self.blochTag, self.uncleIndex
        )

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        klay_response = self.sdk.eth.get_uncle_by_block_number_and_index(self.blochTag)
        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
