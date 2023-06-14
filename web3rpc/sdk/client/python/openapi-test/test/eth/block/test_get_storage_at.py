from base.testing import KlaytnBaseTesting
from eth_utils.address import to_checksum_address

class TestEthGetStorageAt(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.address = to_checksum_address("0x295a70b2de5e3953354a6a8344e616ed314d7251")
        self.quantity = 0

    def test_post(self):
        self.response = self.w3.eth.get_storage_at(
            self.address, self.quantity
        )
        self.assertIsInstance(self.response, bytes)

    # def test_post_wrong_with_lack_paramaters(self):
    #     with self.assertRaises(ValueError):
    #         self.response = self.w3.eth.get_storage_at(self.blockTag)

