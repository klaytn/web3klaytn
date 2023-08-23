from base.testing import KlaytnBaseTesting
from base.eth import unlock_account


class TestSign(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.address = unlock_account()
        self.message = bytes.fromhex("deadbeaf")

    def test_post(self):
        self.response = self.w3.eth.sign(
            self.address, self.message
        )
        self.assertIsInstance(self.response, bytes)

    # def test_post_wrong_with_lack_paramaters(self):
    #     with self.assertRaises(ValueError):
    #         self.response = self.w3.eth.sign(self.address)

