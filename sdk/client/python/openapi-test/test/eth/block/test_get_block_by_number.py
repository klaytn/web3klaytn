from base.testing import KlaytnBaseTesting


class TestEthGetBlockByNumber(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blochTag = "0xd0054e"
        self.boolean = False

    def test_post(self):
        klay_response = self.sdk.eth.get_block_by_number(
            self.blochTag, self.boolean
        )

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        klay_response = self.sdk.eth.get_block_by_number(self.blochTag)
        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
