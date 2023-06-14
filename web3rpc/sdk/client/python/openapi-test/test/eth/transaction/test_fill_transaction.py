from base.testing import KlaytnBaseTesting
from unittest import skip

class TestFillTransaction(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.transactionArgs = {
            "from": "0x51239f87c33e95e3bdb72e31d06b5306bcec81cc",
            "to": "0x8c9f4468ae04fb3d79c80f6eacf0e4e1dd21deee",
            "value": "0x1",
            "gas": "0x9999",
            "maxFeePerGas": "0xbb43b7400"
        }

    @skip
    def test_post(self):
        self.response = self.w3.eth.fill_transaction(
            self.transactionArgs
        )
        self.assertResponseSuccess()

    # def test_post_wrong_with_lack_paramaters(self):
    #     with self.assertRaises(ValueError):
    #         self.response = self.w3.eth.fill_transaction()

