from base.testing import KlaytnBaseTesting


class TestStartGoTrace(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.file = "go.trace"

    def test_post(self):
        self.response = self.w3.debug.start_go_trace(
            self.file
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.debug.start_go_trace()

