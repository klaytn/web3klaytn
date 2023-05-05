from base.testing import KlaytnBaseTesting
from base.eth import unlock_account, getNonce


class TestSignTransactionAsFeePayer(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.txObject = {
            "typeInt": 17,
            "from": unlock_account(),
            "to": "0x44711E89b0c23845b5B2ed9D3716BA42b8a3e075",
            "gas": "0x76c0", "gasPrice": "0x5d21dba00",
            "value": "0xf4",
            "input": "0xb3f98adc0000000000000000000000000000000000000000000000000000000000000001",
            "feePayer": unlock_account(),
            "nonce": getNonce(),
        }

    def test_post(self):
        klay_response = self.sdk.klay.sign_transaction_as_fee_payer(
            self.txObject
        )

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        klay_response = self.sdk.klay.sign_transaction_as_fee_payer()

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
