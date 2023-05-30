from base.testing import KlaytnBaseTesting
from base.eth import get_raw_transaction


class TestSendRawTransaction(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.singedTransactionData = get_raw_transaction()

    def test_post(self):
        self.response = self.sdk.klay.send_raw_transaction(
            self.singedTransactionData
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.klay.send_raw_transaction()
        self.assertErrorCodeMissingRequiredArgument()
