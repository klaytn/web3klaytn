from base.testing import KlaytnBaseTesting


class TestWriteMutexProfile(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.file = "mutex.profile"

    def test_post(self):
        self.response = self.w3.debug.write_mutex_profile(
            self.file
        )
        self.assertIsNone(self.response)

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.debug.write_mutex_profile()

