from base.testing import KlaytnBaseTesting


class TestWriteMemProfile(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.file = "mem.profile"

    def test_post(self):
        self.response = self.w3.debug.write_mem_profile(
            self.file
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.debug.write_mem_profile()

