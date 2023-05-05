from base.testing import KlaytnBaseTesting


class TestSetHead(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.number = "0x100"

    def test_post(self):
        debug_response = self.sdk.debug.set_head(
            self.number
        )

        self.covert_response(debug_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        debug_response = self.sdk.debug.set_head()

        self.covert_response(debug_response.response)
        self.assertResponseSuccess()
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
