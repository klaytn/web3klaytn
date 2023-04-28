from base.testing import KlaytnBaseTesting


class TestSign(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.message = "0xdeadbeaf"
        self.address = "0x6b1ac7bda0073095df1d434c39d66fb31a592bdd"
        self.password = "helloWorld"

    def test_post(self):
        personal_response = self.sdk.personal.sign(
            self.message, self.address, self.password
        )

        self.covert_response(personal_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        personal_response = self.sdk.personal.sign(self.message)

        self.covert_response(personal_response.response)
        self.assertResponseSuccess()
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
