from base.testing import KlaytnBaseTesting


class TestEncodeAccountKey(KlaytnBaseTesting):
    
    def setUp(self) -> None:
        super().setUp()
        self.accountKey = {
            "keyType": 0,
            "key": {}
        }

    def test_post(self):
        klay_response = self.sdk.klay.encode_account_key(
            self.accountKey
        )

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        klay_response = self.sdk.klay.encode_account_key()

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
