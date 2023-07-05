from base.testing import KlaytnBaseTesting
from eth_utils.address import to_checksum_address

class TestSign(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.message = "0xdeadbeaf"
        self.address = to_checksum_address("0x6b1ac7bda0073095df1d434c39d66fb31a592bdd")
        self.password = "helloWorld"

    def test_post(self):
        self.response = self.w3.geth.personal.sign(
            self.message, self.address, self.password
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.geth.personal.sign(self.message)

