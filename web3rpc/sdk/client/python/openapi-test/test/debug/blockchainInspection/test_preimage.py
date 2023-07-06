from base.testing import KlaytnBaseTesting


class TestDebugPreimage(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.sha3Hash = "0xaf953a2d01f55cfe080c0c94150a60105e8ac3d51153058a1f03dd239dd08586"

    def test_post(self):
        self.response = self.w3.debug.preimage(
            self.sha3Hash
        )
        self.assertIsInstance(self.response, str)

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.debug.preimage()

