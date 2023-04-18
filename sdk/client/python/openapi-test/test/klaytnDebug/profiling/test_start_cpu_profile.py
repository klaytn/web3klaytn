from base.testing import KlaytnBaseTesting


class TestStartCPUProfile(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.file = "block.profile"

    def test_post(self):
        debug_response = self.sdk.debug.start_cpu_profile(
            self.file
        )

        self.covert_response(debug_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        debug_response = self.sdk.debug.start_cpu_profile()

        self.covert_response(debug_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
