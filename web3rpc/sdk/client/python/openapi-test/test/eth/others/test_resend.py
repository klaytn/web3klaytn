from base.testing import KlaytnBaseTesting
from base.eth import unlock_account_pn, get_nonce_pending, send_transaction_pn
import unittest


class TestResend(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        send_transaction_pn()
        self.oldTrx = {
            "from": unlock_account_pn(),
            "to": "0x8c9f4468ae04fb3d79c80f6eacf0e4e1dd21deee",
            "value": "0x1",
            "gas": "0x9999",
            "maxFeePerGas": "0x5d21dba00",
            "maxPriorityFeePerGas": "0x5d21dba00",
            "nonce": get_nonce_pending(),
        }
        self.gasPrice = "0xba43b7500"
        self.gasLimit = "0xe8d4a50fff"

    @unittest.skip
    def test_post(self):
        self.response = self.w3.eth.resend(
            self.oldTrx, self.gasPrice, self.gasLimit
        )
        self.assertRegex(self.response, r'^0x.*$')

    # @unittest.skip
    # def test_post_wrong_with_lack_paramaters(self):
    #     with self.assertRaises(ValueError):
    #         self.response = self.w3.eth.resend(self.gasPrice)

