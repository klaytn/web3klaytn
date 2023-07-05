from base.testing import KlaytnBaseTesting


class TestEcRecover(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.message = "0xdead"
        self.signature = "0xccb8cce176b01fdc8f7ac3c101b8eb3b9005e938a60800e517624419dd8b7fba0e4598bdf1c4fa1743e1288e89b8b7090cc11f4b3640aafcbc71896ec73eec241b"

    def test_post(self):
        self.response = self.w3.geth.personal.ec_recover(
            self.message, self.signature
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.geth.personal.ec_recover(self.message)

