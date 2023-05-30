from base.testing import KlaytnBaseTesting


class TestStopGoTrace(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.file = "go.trace"

    def test_post(self):
        self.response = self.sdk.debug.stop_go_trace()
        self.assertResponseSuccess()
