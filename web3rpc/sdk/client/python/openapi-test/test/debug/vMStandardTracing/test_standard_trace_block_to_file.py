from base.testing import KlaytnBaseTesting


class TestStandardTraceBlockToFile(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockHash = "0xf1b4df5d4457d4771740887eeb46de3fc26ae4cddf93d69b1b237c2366ff12eb"

    def test_post(self):
        self.response = self.w3.debug.standard_trace_block_to_file(
            self.blockHash
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.debug.standard_trace_block_to_file()

