from base.testing import KlaytnBaseTesting


class TestDebugGetBlockRlp(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockHash = "latest"

    def test_post(self):
        self.response = self.w3.debug.get_block_rlp(
            self.blockHash
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.debug.get_block_rlp()

