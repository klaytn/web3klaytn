from base.testing import KlaytnBaseTesting


class TestGetTransactionCount(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.address = "0xc94770007dda54cF92009BFF0dE90c06F603a09f"
        self.blockTag = "latest"

    def test_post(self):
        self.response = self.sdk.klay.get_transaction_count(
            self.address, self.blockTag
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.klay.get_transaction_count(self.blockTag)
        self.assertErrorCodeMissingRequiredArgument()
