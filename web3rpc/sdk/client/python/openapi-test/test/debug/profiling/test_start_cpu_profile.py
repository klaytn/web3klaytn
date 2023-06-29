from base.testing import KlaytnBaseTesting


class TestStartCPUProfile(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.file = "block.profile1"

    def test_post(self):
        self.response = self.w3.debug.start_cpu_profile(
            self.file
        )
        self.assertIsNone(self.response)

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.debug.start_cpu_profile()

