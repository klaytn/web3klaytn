from base.testing import KlaytnBaseTesting


class TestDebugMetrics(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.raw = True

    def test_post(self):
        self.response = self.w3.debug.metrics(
            self.raw
        )
        self.assertTrue(len(self.response) >= 0)

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.debug.metrics()

