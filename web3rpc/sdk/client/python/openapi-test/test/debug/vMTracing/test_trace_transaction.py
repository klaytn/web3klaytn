from base.testing import KlaytnBaseTesting


class TestTraceTransaction(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.txHash = "0xa9acfc383bb777cdeaa4e860db28209bb1e3afccd3c623aad0732367566ec015"

    def test_post(self):
        self.response = self.w3.debug.trace_transaction(
            self.txHash
        )
        self.assertIsInstance(self.response["gas"], int)

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.debug.trace_transaction()

