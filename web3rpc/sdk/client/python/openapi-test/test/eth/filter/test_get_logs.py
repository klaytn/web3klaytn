from base.testing import KlaytnBaseTesting
from eth_utils.address import to_checksum_address


class TestEthGetLogs(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.filterOptions = {
            "fromBlock": "latest",
            "toBlock": "latest",
            "address": to_checksum_address("0x87ac99835e67168d4f9a40580f8f5c33550ba88b")
        }

    def test_post(self):
        self.response = self.w3.eth.get_logs(
            self.filterOptions
        )
        self.assertTrue(len(self.response) >= 0)

    # def test_post_wrong_with_lack_paramaters(self):
    #     with self.assertRaises(ValueError):
    #         self.response = self.w3.eth.get_logs()

