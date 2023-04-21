from base.testing import KlaytnBaseTesting


class TestSendTransaction(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.transactionObject = {
            "from": "0x413ba0e5f6f00664598b5c80042b1308f4ff1408",
            "to": "0x8c9f4468ae04fb3d79c80f6eacf0e4e1dd21deee",
            "value": "0x1"
        }
        self.password = "helloWorld"

    def test_post(self):
        personal_response = self.sdk.personal.send_transaction(
            self.transactionObject, self.password
        )

        self.covert_response(personal_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        personal_response = self.sdk.personal.send_transaction()

        self.covert_response(personal_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
