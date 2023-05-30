from base.testing import KlaytnBaseTesting


class TestEncodeAccountKey(KlaytnBaseTesting):
    
    def setUp(self) -> None:
        super().setUp()
        self.accountKey = {
            "keyType": 0,
            "key": {}
        }

    def test_post(self):
        self.response = self.sdk.klay.encode_account_key(
            self.accountKey
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.klay.encode_account_key()
        self.assertErrorCodeMissingRequiredArgument()
