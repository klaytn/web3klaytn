from base.testing import KlaytnBaseTesting
from eth_utils.address import to_checksum_address

class TestGetCode(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.address = to_checksum_address("0x1cbd3b2770909d4e10f157cabc84c7264073c9ec")

    def test_post(self):
        self.response = self.w3.eth.get_code(self.address)
        self.assertIsInstance(self.response, bytes)