from base.testing import KlaytnBaseTesting


class TestKlayGetBlockReceipts(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockHash = "0xba647d41423faeebe8a7c64737d284fc2eba6f0388a3e1ebf6243db509ec1577"

    def test_post(self):
        self.response = self.w3.klay.get_block_receipts(
            self.blockHash
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.klay.get_block_receipts()

