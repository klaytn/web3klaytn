from base.testing import KlaytnBaseTesting


class TestKlaySha3(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.hashData = "0x11223344"

    def test_post(self):
        self.response = self.sdk.klay.sha3(
            self.hashData,
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.klay.sha3()
        self.assertErrorCodeMissingRequiredArgument()
