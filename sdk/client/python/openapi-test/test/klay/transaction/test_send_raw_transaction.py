from base.testing import KlaytnBaseTesting
from base.eth import get_raw_transaction


class TestSendRawTransaction(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.singedTransactionData = get_raw_transaction()

    def test_post(self):
        klay_response = self.sdk.klay.send_raw_transaction(
            self.singedTransactionData
        )

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        klay_response = self.sdk.klay.send_raw_transaction()

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
