from base.testing import KlaytnBaseTesting


class TestDebugSetVMLogTarget(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.target = 3

    def test_post(self):
        debug_response = self.sdk.debug.set_vm_log_target(
            self.target
        )

        self.covert_response(debug_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        debug_response = self.sdk.debug.set_vm_log_target()

        self.covert_response(debug_response.response)
        self.assertResponseSuccess()
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
