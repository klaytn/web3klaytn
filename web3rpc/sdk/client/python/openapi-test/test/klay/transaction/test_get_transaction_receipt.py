from base.testing import KlaytnBaseTesting


class TestTransactionByHash(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.transactionHash = "0xaca5d9a1ed8b86b1ef61431b2bedfc99a66eaefc3a7e1cffdf9ff53653956a67"

    def test_post(self):
        self.response = self.sdk.klay.get_transaction_receipt(self.transactionHash)
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.klay.get_transaction_receipt()
        self.assertErrorCodeMissingRequiredArgument()
