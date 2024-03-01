from base.testing import KlaytnBaseTesting


class TestconvertChildChainBlockHashToParentChainTxHash(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockhash = "0xeadc6a3a29a20c13824b5df1ba05cca1ed248d046382a4f2792aac8a6e0d1880"
       

    def test_post(self):
        self.response = self.w3.mainbridge.mb_add_peer(
            self.blockhash
        )


