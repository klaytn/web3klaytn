from base.testing import KlaytnBaseTesting
from eth_utils.address import to_checksum_address
from web3._utils.filters import Filter

class TestEthNewFilter(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.filterOptions = {
            "fromBlock": "earliest",
            "toBlock": "latest",
            "address": to_checksum_address("0x87ac99835e67168d4f9a40580f8f5c33550ba88b"),
            "topics": ["0xd596fdad182d29130ce218f4c1590c4b5ede105bee36690727baa6592bd2bfc8"]
        }

    def test_post(self):
        self.response = self.w3.eth.filter(
            self.filterOptions
        )
        self.assertIsInstance(self.response, Filter)

    # def test_post_wrong_with_lack_paramaters(self):
    #     with self.assertRaises(ValueError):
    #         self.response = self.w3.eth.new_filter()

