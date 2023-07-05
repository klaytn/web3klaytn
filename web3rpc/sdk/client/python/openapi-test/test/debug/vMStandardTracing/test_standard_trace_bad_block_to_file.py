from base.testing import KlaytnBaseTesting


class TestStandardTraceBadBlockToFile(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockHash = "0x485fff444481ee28debe50639f312f44e0a09342161a8906a99cf325cc2512a4"

    def test_post(self):
        self.response = self.w3.debug.standard_trace_bad_block_to_file(
            self.blockHash
        )
        self.assertIsNone(self.response)

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.debug.standard_trace_bad_block_to_file()

