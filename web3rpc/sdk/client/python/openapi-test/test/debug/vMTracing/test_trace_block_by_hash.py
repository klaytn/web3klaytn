from base.testing import KlaytnBaseTesting


class TestTraceBlockByHash(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockHash = "0x651722eb826af57fd95a2381c9cc0c162f90087d8283d02945c42b48229edf86"

    def test_post(self):
        self.response = self.w3.debug.trace_block_by_hash(
            self.blockHash
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.debug.trace_block_by_hash()

