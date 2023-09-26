from base.testing import KlaytnBaseTesting


class TestCPUProfile(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.file = "block.profile"
        self.seconds = 10

    def test_post(self):
        self.response = self.w3.debug.cpu_profile(
            self.file, self.seconds
        )
        self.assertIsNone(self.response)

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.debug.cpu_profile()

