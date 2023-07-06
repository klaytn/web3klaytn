from base.testing import KlaytnBaseTesting


class TestDebugSetVMLogTarget(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.target = 3

    def test_post(self):
        self.response = self.w3.debug.set_vm_log_target(
            self.target
        )
        self.assertIsInstance(self.response, str)

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.debug.set_vm_log_target()

