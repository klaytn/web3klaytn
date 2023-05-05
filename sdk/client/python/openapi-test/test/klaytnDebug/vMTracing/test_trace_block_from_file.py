from base.testing import KlaytnBaseTesting


class TestTraceBlockFromFile(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.fileName = "/home/sotatek/block.rlp"

    def test_post(self):
        debug_response = self.sdk.debug.trace_block_from_file(
            self.fileName
        )

        self.covert_response(debug_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        debug_response = self.sdk.debug.trace_block_from_file()

        self.covert_response(debug_response.response)
        self.assertResponseSuccess()
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
