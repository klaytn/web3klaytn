from base.testing import KlaytnBaseTesting


class TestDebugChaindbProperty(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.string = "0xe17d821e9a8a8736b9aea8c2de1f3a4934ac0a2f"

    def test_post(self):
        self.response = self.w3.debug.chaindb_property(
            self.string
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.debug.chaindb_property()

