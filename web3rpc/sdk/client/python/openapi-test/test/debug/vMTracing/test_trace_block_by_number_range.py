from base.testing import KlaytnBaseTesting


class TestTraceBlockByNumberRange(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.startBlock = 21
        self.endBlock = 22

    def test_post(self):
        self.response = self.w3.debug.trace_block_by_number_range(
            self.startBlock, self.endBlock
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.debug.trace_block_by_number_range(self.startBlock)

