from base.testing import KlaytnBaseTesting


class TestGoTrace(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.file = "go.trace"
        self.seconds = 5

    def test_post(self):
        self.response = self.w3.debug.go_trace(
            self.file, self.seconds
        )
        self.assertIsNone(self.response)

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.debug.go_trace()

