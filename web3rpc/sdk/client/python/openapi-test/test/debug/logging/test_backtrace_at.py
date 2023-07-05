from base.testing import KlaytnBaseTesting


class TestDebugBacktraceAt(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.location = "server.go:443"

    def test_post(self):
        self.response = self.w3.debug.backtrace_at(
            self.location
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.debug.backtrace_at()

