from base.testing import KlaytnBaseTesting


class TestDebugVmodule(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.module = "p2p=4"

    def test_post(self):
        self.response = self.w3.debug.vmodule(
            self.module
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.debug.vmodule()

