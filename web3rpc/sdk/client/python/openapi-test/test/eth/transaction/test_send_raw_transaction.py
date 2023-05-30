from base.testing import KlaytnBaseTesting
from base.eth import get_raw_transaction


class TestSendRawTransaction(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.signedTransactionData = get_raw_transaction()

    def test_post(self):
        self.response = self.sdk.eth.send_raw_transaction(
            self.signedTransactionData
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.eth.send_raw_transaction()
        self.assertErrorCodeMissingRequiredArgument()
