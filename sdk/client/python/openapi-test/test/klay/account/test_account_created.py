from base.testing import KlaytnBaseTesting


class TestAccountCreated(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockTag = "latest"
        self.address = "0xa4f42d4d2a3a13874406435500950c9bf2d783db"

    def test_post(self):
        klay_response = self.sdk.klay.account_created(
            self.address, self.blockTag
        )

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        klay_response = self.sdk.klay.account_created(self.blockTag)
        
        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
