from base.testing import KlaytnBaseTesting


class TestSendChainTxslimit (KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
       

    def test_post(self):
        self.response = self.w3.subbridge.send_chain_txslimit()
