from base.testing import KlaytnBaseTesting
from base.eth import unlock_account, getNonce


class TestSendTransaction(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.transactionObject = {
            "from": unlock_account(),
            "to": "0x8c9f4468ae04fb3d79c80f6eacf0e4e1dd21deee",
            "value": "0x1",
            "gas": "0x9999",
            "txSignatures": [
                {
                    "v": "0x7f4",
                    "r": "0x9e9d1cbf8c1a4e31fcd4e393f3e535cb5fdd625af678cded6a273994d3fafda2",
                    "s": "0x17306171c0251a16c3e469a00b23c27f3a8fa70c8d3db5b520f076b186d74037"
                }
            ],
            "nonce": getNonce(),
        }

        self.password = "helloWorld"

    def test_post(self):
        personal_response = self.sdk.personal.send_value_transfer(
            self.transactionObject, self.password
        )

        self.covert_response(personal_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        personal_response = self.sdk.personal.send_value_transfer()

        self.covert_response(personal_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
