from base.testing import KlaytnBaseTesting


class TestDebugSetBlockProfileRate(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.rate = 4

    def test_post(self):
        self.response = self.w3.debug.set_block_profile_rate(
            self.rate
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.debug.set_block_profile_rate()

