from base.testing import KlaytnBaseTesting
from eth_utils.address import to_checksum_address

class TestUnlockAccount(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.address = to_checksum_address("0xd9ab651b40dda2ee84fa087828d8a20dec5d3d97")
        self.passphrase = "helloWorld"
        self.duration = 30

    def test_post(self):
        self.response = self.w3.geth.personal.unlock_account(
            self.address, self.passphrase, self.duration
        )
        self.assertEqual(self.response, True)

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.geth.personal.unlock_account()

