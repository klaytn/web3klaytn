from base.testing import KlaytnBaseTesting
from base.eth import unlock_account, getNonce, getFeePayerSignatures


class TestSendTransactionAsFeePayer(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.txObject = {
            "typeInt": 17,
            "from": unlock_account(),
            "to": "0x44711E89b0c23845b5B2ed9D3716BA42b8a3e075",
            "gas": "0x9999",
            "value": "0x1",
            "input": "0xb3f98adc0000000000000000000000000000000000000000000000000000000000000001",
            "feePayer": unlock_account(),
            # "nonce": getNonce()

        }
        self.signedTX = getFeePayerSignatures(self.txObject)

    def test_post(self):
        self.response = self.w3.klay.send_transaction_as_fee_payer(
            {
                "typeInt": self.signedTX["typeInt"],
                "type": self.signedTX["type"],
                "nonce": self.signedTX["nonce"],
                "gasPrice": self.signedTX["gasPrice"],
                "gas": self.signedTX["gas"],
                "to": self.signedTX["to"],
                "value": self.signedTX["value"],
                "from": self.signedTX["from"],
                "input": self.signedTX["input"],
                "signatures": [
                    {
                        "V": self.signedTX["signatures"][0]["V"],
                        "R": self.signedTX["signatures"][0]["R"],
                        "S": self.signedTX["signatures"][0]["S"]
                    }
                ],
                "feePayer": self.signedTX["feePayer"],
                "feePayerSignatures": self.signedTX["feePayerSignatures"],
                "hash": self.signedTX["hash"]
            }
        )
        self.assertRegex(self.response, r'^0x.*$')

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.klay.send_transaction_as_fee_payer()
