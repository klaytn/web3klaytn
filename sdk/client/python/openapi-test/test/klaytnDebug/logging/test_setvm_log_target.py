from base.testing import KlaytnBaseTesting


class TestDebugSetVMLogTarget(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.target = 3

    def test_post(self):
        self.response = self.sdk.debug.set_vm_log_target(
            self.target
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.debug.set_vm_log_target()
        self.assertErrorCodeMissingRequiredArgument()
