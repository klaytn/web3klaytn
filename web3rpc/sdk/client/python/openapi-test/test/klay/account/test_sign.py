from base.testing import KlaytnBaseTesting
from base.eth import unlock_account


class TestKlaySign(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.address = unlock_account()
        self.message = "0xdeadbeaf"

    def test_post(self):
        self.response = self.w3.klay.sign(
            self.address, self.message
        )
        self.assertRegex(self.response, r'^0x.*$')

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.klay.sign(self.address)
