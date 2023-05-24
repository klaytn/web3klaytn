from base.testing import KlaytnBaseTesting


class TestDebugMetrics(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.raw = True

    def test_post(self):
        self.response = self.sdk.debug.metrics(
            self.raw
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.debug.metrics()
        self.assertErrorCodeMissingRequiredArgument()
