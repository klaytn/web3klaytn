from base.testing import KlaytnBaseTesting
import unittest


class TestPersonalDeriveAccount(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.url = "url"
        self.path = "path"
        self.pin = True

    @unittest.skip
    def test_post(self):
        self.response = self.w3.geth.personal.derive_account(
            self.url, self.path, self.pin
        )

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.geth.personal.derive_account(self.url)

