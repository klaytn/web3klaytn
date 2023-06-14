from base.testing import KlaytnBaseTesting


class TestIsContractAccount(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.address = "0xc94770007dda54cF92009BFF0dE90c06F603a09f"
        self.blockTag = "latest"

    def test_post(self):
        self.response = self.w3.klay.is_contract_account(
            self.address, self.blockTag
        )
        self.assertIsInstance(self.response, bool)

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.klay.is_contract_account(self.blockTag)
