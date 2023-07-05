from base.testing import KlaytnBaseTesting
from eth_utils.address import to_checksum_address

class TestEstimateGas(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.callObject = {
            "from": to_checksum_address("0x51239f87c33e95e3bdb72e31d06b5306bcec81cc"),
            "to": to_checksum_address("0x87ac99835e67168d4f9a40580f8f5c33550ba88b"),
            "gas": "0x100000",
            "gasPrice": "0x5d21dba00",
            "value": "0x0",
            "input": "0x8ada066e"
        }

    def test_post(self):
        self.response = self.w3.eth.estimate_gas(
            self.callObject
        )
        self.assertIsInstance(self.response, int)

    # def test_post_wrong_with_lack_paramaters(self):
    #     with self.assertRaises(ValueError):
    #         self.response = self.w3.eth.estimate_gas()

