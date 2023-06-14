from base.testing import KlaytnBaseTesting


class TestTraceBlockByNumber(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.number = 1449

    def test_post(self):
        self.response = self.w3.debug.trace_block_by_number(
            self.number
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.debug.trace_block_by_number()

