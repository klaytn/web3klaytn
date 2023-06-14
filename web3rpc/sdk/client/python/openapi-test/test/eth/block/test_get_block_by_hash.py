from base.testing import KlaytnBaseTesting


class TestEthGetBlockByHash(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockHash = "0xb8deae63002d2b6aa33247c8ef545383ee0fd2282ac9b49dbbb74114389ddb5c"
        self.transactionObject = False

    def test_post(self):
        self.response = self.w3.eth.get_block(
            self.blockHash, self.transactionObject
        )
        self.assertResponseSuccess()

    # def test_post_wrong_wiVjth_lack_paramaters(self):
    #     with self.assertRaises(ValueError):
    #         self.response = self.w3.eth.get_block_by_hash(self.blockHash)

