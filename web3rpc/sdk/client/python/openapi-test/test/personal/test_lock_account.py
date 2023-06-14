from base.testing import KlaytnBaseTesting
from eth_utils.address import to_checksum_address

class TestLockAccount(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.address = "0xfa415bb3e6231f488ff39eb2897db0ef3636dd32"

    def test_post(self):
        self.response = self.w3.geth.personal.lock_account(
            to_checksum_address(self.address)
        )
        self.assertEqual(self.response, True)

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.geth.personal.lock_account()

