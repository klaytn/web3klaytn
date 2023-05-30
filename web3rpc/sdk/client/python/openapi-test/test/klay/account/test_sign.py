from base.testing import KlaytnBaseTesting
from base.eth import unlock_account


class TestKlaySign(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.address = unlock_account()
        self.message = "0xdeadbeaf"

    def test_post(self):
        self.response = self.sdk.klay.sign(
            self.address, self.message
        )

        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.klay.sign(self.address)
        self.assertErrorCodeMissingRequiredArgument()
