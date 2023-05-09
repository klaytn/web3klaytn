from base.testing import KlaytnBaseTesting


class TestGoTrace(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.file = "go.trace"
        self.seconds = 5

    def test_post(self):
        self.response = self.sdk.debug.go_trace(
            self.file, self.seconds
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.debug.go_trace()
        self.assertErrorCodeMissingRequiredArgument()
