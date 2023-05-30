from base.testing import KlaytnBaseTesting


class TestBlockNumber(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.eth.block_number()
        self.assertResponseSuccess()
