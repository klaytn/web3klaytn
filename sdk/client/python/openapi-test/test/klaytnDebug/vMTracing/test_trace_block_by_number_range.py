from base.testing import KlaytnBaseTesting


class TestTraceBlockByNumberRange(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.startBlock = 21
        self.endBlock = 22

    def test_post(self):
        debug_response = self.sdk.debug.trace_block_by_number_range(
            self.startBlock, self.endBlock
        )

        self.covert_response(debug_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        debug_response = self.sdk.debug.trace_block_by_number_range(self.startBlock)

        self.covert_response(debug_response.response)
        self.assertResponseSuccess()
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
