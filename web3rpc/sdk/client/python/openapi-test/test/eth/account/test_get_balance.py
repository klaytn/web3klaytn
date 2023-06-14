from base.testing import KlaytnBaseTesting
from eth_utils.address import to_checksum_address

class TestGetBalance(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.address = to_checksum_address("0x1cbd3b2770909d4e10f157cabc84c7264073c9ec")
        self.blockNumberOrHash = "latest"

    def test_post(self):
        self.response = self.w3.eth.get_balance(
            self.address, self.blockNumberOrHash
        )
        self.assertIsInstance(self.response, int)

    # def test_post_wrong_with_lack_paramaters(self):
    #     with self.assertRaises(ValueError):
    #         self.response = self.w3.eth.get_balance(self.address)

