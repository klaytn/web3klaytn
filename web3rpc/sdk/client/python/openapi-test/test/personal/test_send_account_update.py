from base.testing import KlaytnBaseTesting


class TestSendAccountUpdate(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.tx = {
            "from": "0x5c692652c5df87775737bbd3ce8a164e9572fb58",
            "key": "0x01c0"
        }
        self.passphrase = "helloWorld"

    def test_post(self):
        self.response = self.w3.geth.personal.send_account_update(
            self.tx, self.passphrase
        )
        self.assertRegex(self.response, r'^0x.*$')

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.geth.personal.send_account_update()

