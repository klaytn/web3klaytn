from base.testing import KlaytnBaseTesting


class TestDebugVmodule(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.module = "p2p=4"

    def test_post(self):
        self.response = self.sdk.debug.vmodule(
            self.module
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.debug.vmodule()
        self.assertErrorCodeMissingRequiredArgument()
