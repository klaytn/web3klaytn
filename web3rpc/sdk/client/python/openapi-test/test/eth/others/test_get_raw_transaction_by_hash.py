from base.testing import KlaytnBaseTesting


class TestGetRawTransactionByHash(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        # self.transactionHash = '0x5bbcde52084defa9d1c7068a811363cc27a25c80d7e495180964673aa5f47687'
        self.transactionHash = '0x0a83919ee23b96cb093012df861e53a6964d92a66ead837f8fc2b146da9b1831'

    def test_post(self):
        self.response = self.w3.eth.get_transaction(
            self.transactionHash
        )
        self.assertResponseSuccess()

    # def test_post_wrong_with_lack_paramaters(self):
    #     with self.assertRaises(ValueError):
    #         self.response = self.w3.eth.get_transaction_by_hash()

