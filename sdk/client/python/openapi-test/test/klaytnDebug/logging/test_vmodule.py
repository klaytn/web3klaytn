from base.testing import KlaytnBaseTesting


class TestDebugVmodule(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.module = "p2p=4"

    def test_post(self):
        debug_response = self.sdk.debug.vmodule(
            self.module
        )

        self.covert_response(debug_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        debug_response = self.sdk.debug.vmodule()

        self.covert_response(debug_response.response)
        self.assertResponseSuccess()
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
